package com.example.wmell.registerproject;

import android.content.Context;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.widget.Toast;

import com.example.wmell.registerproject.model.Register;
import com.example.wmell.registerproject.model.TimeResponse;
import com.example.wmell.registerproject.service.ApiManager;
import com.example.wmell.registerproject.service.ServerRegistersCallback;
import com.example.wmell.registerproject.service.ServiceApi;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;


import static com.example.wmell.registerproject.LoginActivity.USER_EMAIL;
import static com.example.wmell.registerproject.LoginActivity.USER_PREFERENCES;
import static com.example.wmell.registerproject.LoginActivity.USER_TOKEN;

public class RegistersActivity extends AppCompatActivity {
    public RecyclerView mRecyclerView;
    private static RecyclerView.LayoutManager mLayoutManager;
    private static RegisterAdapter mRegisterAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_registers);

        mRecyclerView = findViewById(R.id.rv_id);
        mLayoutManager = new LinearLayoutManager(getApplicationContext());
        mRecyclerView.setLayoutManager(mLayoutManager);
        getRegisters(new ServerRegistersCallback() {
            @Override
            public void onSuccess(List<Register> registerList) {
                Toast.makeText(RegistersActivity.this, "Sucesso", Toast.LENGTH_SHORT).show();
                mRegisterAdapter = new RegisterAdapter(getApplicationContext(), registerList);
                mRecyclerView.setAdapter(mRegisterAdapter);
            }

            @Override
            public void onFail(Throwable throwable) {
                Toast.makeText(RegistersActivity.this, "Erro ao carregar os registros!", Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void getRegisters(final ServerRegistersCallback serverCallbackLogin){
        ServiceApi service = ApiManager.getService();
        String userEmail = getSharedPreferences(USER_PREFERENCES, Context.MODE_PRIVATE).getString(USER_EMAIL,"");
        String token = getSharedPreferences(USER_PREFERENCES, Context.MODE_PRIVATE).getString(USER_TOKEN, "");

        Call<TimeResponse> call = service.getRegister(token, userEmail);
        call.enqueue(new Callback<TimeResponse>() {
            @Override
            public void onResponse(Call<TimeResponse> call, Response<TimeResponse> response) {
                if(response.isSuccessful()){
                    TimeResponse timeResponse = response.body();
                    serverCallbackLogin.onSuccess(timeResponse.getRegisters());

                }else{
                    serverCallbackLogin.onFail(null);
                }
            }

            @Override
            public void onFailure(Call<TimeResponse> call, Throwable t) {
                serverCallbackLogin.onFail(t);
            }
        });
    }

}
