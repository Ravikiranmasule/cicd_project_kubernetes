package com.rk.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.rk.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking, Long> {
}

