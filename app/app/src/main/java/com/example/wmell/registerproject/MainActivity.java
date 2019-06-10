package com.example.wmell.registerproject;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

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
                Toast.makeText(this, data.getStringExtra(QRCodeResult), Toast.LENGTH_SHORT).show();
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
}
