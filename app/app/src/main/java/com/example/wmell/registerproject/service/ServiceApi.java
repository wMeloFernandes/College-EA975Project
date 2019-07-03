package com.example.wmell.registerproject.service;

import com.example.wmell.registerproject.model.LoginResponse;
import com.example.wmell.registerproject.model.RegisterResponse;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Query;


public interface ServiceApi {
    @POST("/login")
    @FormUrlEncoded
    Call<LoginResponse> login(@Field("email") String username,
                              @Field("password") String password);

    @POST("/user")
    @FormUrlEncoded
    Call<RegisterResponse> clockIn(@Header("Authorization") String authHeader, @Field("email") String email,
                                   @Field("key") String key);

    @GET("/user")
    Call<RegisterResponse> getRegister(@Query("email") String email);
}
