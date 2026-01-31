package com.rk.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.rk.entity.HotelChain;
import com.rk.repository.HotelChainRepository;
import com.rk.service.HotelChainService;

import java.util.List;

@Service
public class HotelChainServiceImpl implements HotelChainService {
    @Autowired
    private HotelChainRepository hotelChainRepository;

    @Override
    public HotelChain saveHotelChain(HotelChain hotelChain) {
        return hotelChainRepository.save(hotelChain);
    }

    @Override
    public HotelChain updateHotelChain(Long id, HotelChain hotelChain) {
        if (hotelChainRepository.existsById(id)) {
            hotelChain.setId(id);
            return hotelChainRepository.save(hotelChain);
        }
        throw new RuntimeException("Hotel Chain not found");
    }

    @Override
    public void deleteHotelChain(Long id) {
        if (hotelChainRepository.existsById(id)) {
            hotelChainRepository.deleteById(id);
        } else {
            throw new RuntimeException("Hotel Chain not found");
        }
    }

    @Override
    public HotelChain getHotelChainById(Long id) {
        return hotelChainRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Hotel Chain not found"));
    }

    @Override
    public List<HotelChain> getAllHotelChains() {
        return hotelChainRepository.findAll();
    }
}
