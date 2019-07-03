package com.example.wmell.registerproject.service;

import com.example.wmell.registerproject.model.Register;

import java.util.List;

/**
 * Created by wmell on 03/07/2019.
 */

public interface ServerRegistersCallback {

    void onSuccess(List<Register> registers);
    void onFail(Throwable throwable);
}
