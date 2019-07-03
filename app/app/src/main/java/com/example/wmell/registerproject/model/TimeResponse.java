package com.example.wmell.registerproject.model;


import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class TimeResponse {

    @SerializedName("registers")
    @Expose
    private List<Register> registers = null;

    public List<Register> getRegisters() {
        return registers;
    }

    public void setRegisters(List<Register> registers) {
        this.registers = registers;
    }

}
