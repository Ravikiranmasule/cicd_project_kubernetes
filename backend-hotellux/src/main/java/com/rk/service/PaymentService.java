package com.rk.service;

import com.rk.entity.Payment;

public interface PaymentService {

	Payment createPayment(Payment payment);

	Payment getPaymentById(Long id);

	void refundPayment(Long id);



}
