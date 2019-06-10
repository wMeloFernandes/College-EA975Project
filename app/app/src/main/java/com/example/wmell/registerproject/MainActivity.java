package com.example.wmell.registerproject;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;

public class MainActivity extends AppCompatActivity {

    private ImageView mRegisterButton;
    private ImageView mCameraButton;

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
            
        }
    };

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finishAffinity();
    }
}
