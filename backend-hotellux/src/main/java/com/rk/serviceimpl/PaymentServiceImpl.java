package com.rk.serviceimpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.entity.Payment;
import com.rk.repository.PaymentRepository;
import com.rk.service.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;

    public Payment createPayment(Payment payment) {
        // Implement logic for integrating with a payment gateway
        // Example: paymentGateway.processPayment(payment)
        return paymentRepository.save(payment);
    }

    public Payment getPaymentById(Long id) {
        return paymentRepository.findById(id).orElse(null);
    }

    public void refundPayment(Long id) {
        Payment payment = paymentRepository.findById(id).orElseThrow(() -> new RuntimeException("Payment not found"));
        payment.setStatus("Refunded");
        paymentRepository.save(payment);
        // Implement logic to process refund with payment gateway
    }
}

