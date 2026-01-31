package com.rk.repository;

import com.rk.entity.Loyalty;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoyaltyRepository extends JpaRepository<Loyalty, Long> {
    Loyalty findByCustomerId(Long customerId);
}
