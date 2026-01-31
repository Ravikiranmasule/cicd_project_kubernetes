package com.rk.repository;

import com.rk.entity.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RestaurantRepository extends JpaRepository<Restaurant, Long> {
    List<Restaurant> findByHotelId(Long hotelId);
    List<Restaurant> findByCuisineType(String cuisineType);
}
