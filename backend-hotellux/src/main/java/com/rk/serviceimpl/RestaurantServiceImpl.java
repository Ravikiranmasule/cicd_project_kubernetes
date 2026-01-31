package com.rk.serviceimpl;

import com.rk.entity.Hotel;
import com.rk.entity.Restaurant;
import com.rk.model.RestaurantDto;
import com.rk.repository.HotelRepository;
import com.rk.repository.RestaurantRepository;
import com.rk.service.RestaurantService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;
    @Autowired
    HotelRepository hotelRepository;
    
    Logger log=LoggerFactory.getLogger(RestaurantServiceImpl.class);

    public Restaurant createRestaurant(RestaurantDto restaurantDto) {
    log.info("in createRestaurant method of RestaurantServiceImpl");
    	Restaurant restaurant=new Restaurant();
    	Hotel hotel = hotelRepository.findById(restaurantDto.getHotelId()).get();
    	System.out.println("hotel obj");
    	System.out.println();
    	System.out.println(restaurantDto);
    	restaurant.setHotel(hotel);
    	BeanUtils.copyProperties(restaurantDto, restaurant);
    	System.out.println(restaurant);
        return restaurantRepository.save(restaurant);
    }

    public List<Restaurant> getAllRestaurants() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long id) {
        return restaurantRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Restaurant not found"));
    }

    public Restaurant updateRestaurant(Long id, Restaurant restaurant) {
        if (!restaurantRepository.existsById(id)) {
            throw new RuntimeException("Restaurant not found");
        }
        restaurant.setId(id);
        return restaurantRepository.save(restaurant);
    }

    public void deleteRestaurant(Long id) {
        if (!restaurantRepository.existsById(id)) {
            throw new RuntimeException("Restaurant not found");
        }
        restaurantRepository.deleteById(id);
    }

    public List<Restaurant> getRestaurantsByHotel(Long hotelId) {
        return restaurantRepository.findByHotelId(hotelId);
    }

    public List<Restaurant> getRestaurantsByCuisine(String cuisineType) {
        return restaurantRepository.findByCuisineType(cuisineType);
    }

  

  

   

  

    public void importRestaurants(List<Restaurant> restaurants) {
        restaurantRepository.saveAll(restaurants);
    }

   
    
    public void bulkUpdateRestaurants(List<Restaurant> restaurants) {
        restaurantRepository.saveAll(restaurants);
    }

  

	

	

	
}
