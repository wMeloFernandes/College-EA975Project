package com.example.wmell.registerproject.service;

import com.example.wmell.registerproject.model.LoginResponse;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.POST;



public interface ServiceApi {
    @POST("/login")
    @FormUrlEncoded
    Call<LoginResponse> login(@Field("email") String username,
                              @Field("password") String password);
}
