package com.example.wmell.registerproject.model;

import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;


public class LoginResponse {

    @SerializedName("token")
    @Expose
    private String mToken;


    public void setToken(String token){
        mToken = token;
    }

    public String getToken(){
        return mToken;
    }

}

