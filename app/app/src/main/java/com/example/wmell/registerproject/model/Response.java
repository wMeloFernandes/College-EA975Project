package com.example.wmell.registerproject.model;


import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class Response {

    @SerializedName("status")
    @Expose
    private String mStatus;


    public String getStatus(){
        return mStatus;
    }

}
