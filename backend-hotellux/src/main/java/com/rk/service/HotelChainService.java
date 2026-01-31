package com.rk.service;

import com.rk.entity.HotelChain;
import java.util.List;

public interface HotelChainService {
    HotelChain saveHotelChain(HotelChain hotelChain);
    HotelChain updateHotelChain(Long id, HotelChain hotelChain);
    void deleteHotelChain(Long id);
    HotelChain getHotelChainById(Long id);
    List<HotelChain> getAllHotelChains();
}

