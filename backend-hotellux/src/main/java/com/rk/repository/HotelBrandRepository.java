package com.rk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rk.entity.HotelBrand;

@Repository
public interface HotelBrandRepository extends JpaRepository<HotelBrand, Long> {
}
