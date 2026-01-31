package com.rk.service;

import java.util.List;

import com.rk.entity.Restaurant;
import com.rk.model.RestaurantDto;

public interface RestaurantService {



	Object getAllRestaurants();

	Object getRestaurantById(Long id);

	Object updateRestaurant(Long id, Restaurant restaurant);

	void deleteRestaurant(Long id);

	Object getRestaurantsByHotel(Long hotelId);


     Object createRestaurant(RestaurantDto restaurantDto);


}
