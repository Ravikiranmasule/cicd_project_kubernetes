package com.rk.model;

import com.rk.constants.Role;
import lombok.Data;

@Data
public class JwtResponse {
    private final String token;
    private final Role role;  // Change from String to Role

    public JwtResponse(String token, Role role) {
        this.token = token;
        this.role = role;
    }
}
