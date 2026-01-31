package com.rk.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rk.entity.HotelBrand;
import com.rk.repository.HotelBrandRepository;
import com.rk.service.HotelBrandService;

import java.util.List;

@Service
public class HotelBrandServiceImpl implements HotelBrandService {
    @Autowired
    private HotelBrandRepository hotelBrandRepository;

    @Override
    public HotelBrand saveHotelBrand(HotelBrand hotelBrand) {
        return hotelBrandRepository.save(hotelBrand);
    }

    @Override
    public HotelBrand updateHotelBrand(Long id, HotelBrand hotelBrand) {
        if (hotelBrandRepository.existsById(id)) {
            hotelBrand.setId(id);
            return hotelBrandRepository.save(hotelBrand);
        }
        throw new RuntimeException("Hotel Brand not found");
    }

    @Override
    public void deleteHotelBrand(Long id) {
        if (hotelBrandRepository.existsById(id)) {
            hotelBrandRepository.deleteById(id);
        } else {
            throw new RuntimeException("Hotel Brand not found");
        }
    }

    @Override
    public HotelBrand getHotelBrandById(Long id) {
        return hotelBrandRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel Brand not found"));
    }

    @Override
    public List<HotelBrand> getAllHotelBrands() {
        return hotelBrandRepository.findAll();
    }
}
