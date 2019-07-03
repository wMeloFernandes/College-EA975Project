package com.example.wmell.registerproject.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

/**
 * Created by wmell on 09/06/2019.
 */

public class RegisterResponse {
    @SerializedName("message")
    @Expose
    private String mMessage;


    public void setMessage(String message){
        mMessage = message;
    }

    public String getMessage(){
        return mMessage;
    }
}
