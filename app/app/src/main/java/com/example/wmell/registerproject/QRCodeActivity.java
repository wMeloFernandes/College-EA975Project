package com.example.wmell.registerproject;

import android.app.Activity;
import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.widget.Toast;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.Result;

import java.util.ArrayList;

import me.dm7.barcodescanner.zxing.ZXingScannerView;

public class QRCodeActivity extends AppCompatActivity {

    private ZXingScannerView scannerView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_qrcode);

        ArrayList<BarcodeFormat> list = new ArrayList<>();
        list.add(BarcodeFormat.QR_CODE);

        scannerView = findViewById(R.id.qrCode_id);
        scannerView.setFormats(list);
        scannerView.setAutoFocus(true);
        scannerView.setLaserColor(getColor(R.color.laserColor));
        scannerView.setMaskColor(getColor(R.color.maskColor));
    }

    @Override
    protected void onResume() {
        super.onResume();
        scannerView.startCamera();
        scannerView.setResultHandler(resultHandler);
    }

    @Override
    protected void onPause() {
        super.onPause();
        scannerView.stopCamera();
    }

    ZXingScannerView.ResultHandler resultHandler = new ZXingScannerView.ResultHandler() {
        @Override
        public void handleResult(Result result) {
            Intent returnIntent = new Intent();
            returnIntent.putExtra(MainActivity.QRCodeResult, result.getText());
            setResult(Activity.RESULT_OK, returnIntent);
            finish();
        }
    };

}
