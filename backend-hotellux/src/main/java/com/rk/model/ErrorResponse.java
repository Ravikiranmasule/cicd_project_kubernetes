package com.rk.model;

import java.time.LocalDateTime;
import java.util.Date;

// Define a custom error response structure
public class ErrorResponse {
    private Date timestamp;
    private int status;
    private String error;
    private String message;

    // No-argument constructor
    public ErrorResponse() {}

    // All-arguments constructor
    public ErrorResponse(Date timestamp, int status, String error, String message) {
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
        this.message = message;
    }

    // Getters and setters
    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
