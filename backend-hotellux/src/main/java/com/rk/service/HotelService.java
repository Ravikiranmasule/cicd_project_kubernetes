package com.rk.service;

import com.rk.entity.Hotel;
import com.rk.model.HotelDTO;

import java.util.List;

public interface HotelService {
    Hotel saveHotel(HotelDTO hotelDTO);
    Hotel updateHotel(Long id, HotelDTO hotelDTO);
    void deleteHotel(Long id);
    Hotel getHotelById(Long id);
    List<Hotel> getAllHotels();
}
