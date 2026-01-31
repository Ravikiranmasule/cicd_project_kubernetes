package com.rk.entity;


import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long bookingId;
    private Double amount;
    private String paymentMethod; // e.g., Credit Card, PayPal
    private String status; // e.g., Completed, Pending, Refunded
    private LocalDateTime paymentDate;

    // Getters and Setters
}

