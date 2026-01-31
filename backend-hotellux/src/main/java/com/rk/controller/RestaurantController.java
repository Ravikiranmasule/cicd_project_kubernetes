package com.rk.controller;

import com.rk.entity.Restaurant;
import com.rk.model.RestaurantDto;
import com.rk.service.RestaurantService;
import com.rk.serviceimpl.RestaurantServiceImpl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/restaurants")
public class RestaurantController {

    Logger log=LoggerFactory.getLogger(RestaurantController.class);
    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    @PreAuthorize("hasRole('CHEF')")
    public ResponseEntity<Object> createRestaurant(@RequestBody RestaurantDto restaurantDto) {
    	if(restaurantDto.getHotelId()==null )
    		
    	{
    		throw new IllegalArgumentException("hotel id must not be null");}
        log.info("in createRestaurant method of RestaurantController");

        return ResponseEntity.ok(restaurantService.createRestaurant(restaurantDto));
    }

    @GetMapping
    public ResponseEntity<Object> getAllRestaurants() {
        return ResponseEntity.ok(restaurantService.getAllRestaurants());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getRestaurantById(@PathVariable Long id) {
        return ResponseEntity.ok(restaurantService.getRestaurantById(id));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('CHEF')")
    public ResponseEntity<Object> updateRestaurant(@PathVariable Long id, @RequestBody Restaurant restaurant) {
        return ResponseEntity.ok(restaurantService.updateRestaurant(id, restaurant));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('CHEF')")
    public ResponseEntity<?> deleteRestaurant(@PathVariable Long id) {
        restaurantService.deleteRestaurant(id);
        return ResponseEntity.noContent().build();
    }

   

    
   

  
}
