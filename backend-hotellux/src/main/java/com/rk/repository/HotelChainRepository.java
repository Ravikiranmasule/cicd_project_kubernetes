package com.rk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.rk.entity.HotelChain;

@Repository
public interface HotelChainRepository extends JpaRepository<HotelChain, Long> {
}
