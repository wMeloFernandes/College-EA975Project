package com.example.wmell.registerproject;

import android.content.Context;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.wmell.registerproject.model.LoginResponse;
import com.example.wmell.registerproject.model.RegisterResponse;
import com.example.wmell.registerproject.service.ApiManager;
import com.example.wmell.registerproject.service.ServerCallbackLogin;
import com.example.wmell.registerproject.service.ServiceApi;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

import static com.example.wmell.registerproject.LoginActivity.USER_EMAIL;
import static com.example.wmell.registerproject.LoginActivity.USER_PREFERENCES;
import static com.example.wmell.registerproject.LoginActivity.USER_TOKEN;

public class MainActivity extends AppCompatActivity {

    private ImageView mRegisterButton;
    private ImageView mCameraButton;
    public static int REQUEST_CAMERA_CODE = 100;
    public static String QRCodeResult = "QRCodeResult";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        mRegisterButton = findViewById(R.id.iv_registers);
        mCameraButton = findViewById(R.id.iv_camera);

        mRegisterButton.setOnClickListener(registerListener);
        mCameraButton.setOnClickListener(cameraListener);
    }


    private View.OnClickListener registerListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent i = new Intent(MainActivity.this, RegistersActivity.class);
            startActivity(i);
        }
    };

    private View.OnClickListener cameraListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            Intent i = new Intent(MainActivity.this, QRCodeActivity.class);
            startActivityForResult(i, REQUEST_CAMERA_CODE);
        }
    };

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if(requestCode == REQUEST_CAMERA_CODE){
            if(resultCode == RESULT_OK){
                registerTime(new ServerCallbackLogin() {
                    @Override
                    public void onSuccess(String token) {
                        if(token == "Invalid key"){
                            Toast.makeText(getApplicationContext(), "O QRCode expirou. Tente novamente!", Toast.LENGTH_SHORT).show();
                        }else{
                            Toast.makeText(getApplicationContext(), "Ponto registrado", Toast.LENGTH_SHORT).show();
                        }
                    }

                    @Override
                    public void onFail(Throwable throwable) {
                        Toast.makeText(getApplicationContext(), "Erro ao registrar ponto!", Toast.LENGTH_SHORT).show();
                    }
                },data.getStringExtra(QRCodeResult));
            }else{
                Toast.makeText(this, "Problem to read QR Code", Toast.LENGTH_SHORT).show();
            }
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finishAffinity();
    }

    private void registerTime(final ServerCallbackLogin serverCallbackLogin, String key) {
        ServiceApi service = ApiManager.getService();
        String userEmail = getSharedPreferences(USER_PREFERENCES, Context.MODE_PRIVATE).getString(USER_EMAIL,"");
        String token = getSharedPreferences(USER_PREFERENCES, Context.MODE_PRIVATE).getString(USER_TOKEN, "");

        Call<RegisterResponse> call = service.clockIn(token, userEmail, key);
        call.enqueue(new Callback<RegisterResponse>() {
            @Override
            public void onResponse(Call<RegisterResponse> call, Response<RegisterResponse> response) {
                if(response.isSuccessful()){
                    if(response.code() == 204){
                        RegisterResponse registerResponse = response.body();
                        serverCallbackLogin.onSuccess(registerResponse.getMessage());
                    }else{
                        RegisterResponse registerResponse = response.body();
                        serverCallbackLogin.onSuccess(registerResponse.getMessage());
                    }
                }else{
                    serverCallbackLogin.onFail(null);
                }
            }

            @Override
            public void onFailure(Call<RegisterResponse> call, Throwable t) {
                serverCallbackLogin.onFail(t);
            }
        });
    }
}
