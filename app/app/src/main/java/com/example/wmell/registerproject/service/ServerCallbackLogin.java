package com.example.wmell.registerproject.service;

public interface ServerCallbackLogin {

    void onSuccess(String token);
    void onFail(Throwable throwable);
}
