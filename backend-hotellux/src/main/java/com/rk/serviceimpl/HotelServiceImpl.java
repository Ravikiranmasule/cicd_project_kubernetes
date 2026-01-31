package com.rk.serviceimpl;

import com.rk.entity.Hotel;
import com.rk.entity.HotelBrand;
import com.rk.entity.HotelChain;
import com.rk.model.HotelDTO;
import com.rk.repository.HotelRepository;
import com.rk.repository.HotelBrandRepository;
import com.rk.repository.HotelChainRepository;
import com.rk.service.HotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImpl implements HotelService {
    @Autowired
    private HotelRepository hotelRepository;

    @Autowired
    private HotelBrandRepository hotelBrandRepository;

    @Autowired
    private HotelChainRepository hotelChainRepository;

    public Hotel saveHotel(HotelDTO hotelDTO) {
        Hotel hotel = new Hotel();
        
        hotel.setName(hotelDTO.getName());
        hotel.setAddress(hotelDTO.getAddress());

        // Fetch and set HotelChain
        HotelChain chain = hotelChainRepository.findById(hotelDTO.getChainId())
                .orElseThrow(() -> new RuntimeException("HotelChain not found"));
        hotel.setChain(chain);

        // Fetch and set HotelBrand
        HotelBrand brand = hotelBrandRepository.findById(hotelDTO.getBrandId())
                .orElseThrow(() -> new RuntimeException("HotelBrand not found"));
        hotel.setBrand(brand);

        hotel.setStarRating(hotelDTO.getRating());

        return hotelRepository.save(hotel);
    }

    public Hotel updateHotel(Long id, HotelDTO hotelDTO) {
        Hotel hotel = hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
        hotel.setName(hotelDTO.getName());
        hotel.setAddress(hotelDTO.getAddress());

        HotelChain chain = hotelChainRepository.findById(hotelDTO.getChainId())
                .orElseThrow(() -> new RuntimeException("HotelChain not found"));
        hotel.setChain(chain);

        HotelBrand brand = hotelBrandRepository.findById(hotelDTO.getBrandId())
                .orElseThrow(() -> new RuntimeException("HotelBrand not found"));
        hotel.setBrand(brand);

        hotel.setStarRating(hotelDTO.getRating());

        return hotelRepository.save(hotel);
    }

    public void deleteHotel(Long id) {
        hotelRepository.deleteById(id);
    }

    public Hotel getHotelById(Long id) {
        return hotelRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel not found"));
    }

    public List<Hotel> getAllHotels() {
        return hotelRepository.findAll();
    }
}