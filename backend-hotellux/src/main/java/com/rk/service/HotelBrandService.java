package com.rk.service;

import com.rk.entity.HotelBrand;
import java.util.List;

public interface HotelBrandService {
    HotelBrand saveHotelBrand(HotelBrand hotelBrand);
    HotelBrand updateHotelBrand(Long id, HotelBrand hotelBrand);
    void deleteHotelBrand(Long id);
    HotelBrand getHotelBrandById(Long id);
    List<HotelBrand> getAllHotelBrands();
}
