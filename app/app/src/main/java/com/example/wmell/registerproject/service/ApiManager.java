package com.example.wmell.registerproject.service;


import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class ApiManager {

    public static ServiceApi getService(){
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://192.168.0.2:3000/")
                .addConverterFactory(GsonConverterFactory.create())
                .build();

        return retrofit.create(ServiceApi.class);
    }
}
