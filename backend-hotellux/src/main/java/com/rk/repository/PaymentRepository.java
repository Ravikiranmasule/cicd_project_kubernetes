package com.rk.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.rk.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}

