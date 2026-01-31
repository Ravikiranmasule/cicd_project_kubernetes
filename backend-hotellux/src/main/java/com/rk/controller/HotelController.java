package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.rk.entity.Hotel;
import com.rk.model.HotelDTO;
import com.rk.service.HotelService;

import java.util.List;

@RestController
@RequestMapping("/api/hotels")
@CrossOrigin
@PreAuthorize("hasRole('MANAGER')")
public class HotelController {
    @Autowired
    private HotelService hotelService;

    @PostMapping("/register")
    public ResponseEntity<Hotel> createHotel(@RequestBody HotelDTO hotelDTO) {
        if (hotelDTO.getChainId() == null || hotelDTO.getBrandId() == null) {
            throw new IllegalArgumentException("HotelChain ID and HotelBrand ID must not be null");
        }
        return ResponseEntity.ok(hotelService.saveHotel(hotelDTO));
    }


    @PutMapping("/{id}")
    public ResponseEntity<Hotel> updateHotel(@PathVariable Long id, @RequestBody HotelDTO hotelDTO) {
        return ResponseEntity.ok(hotelService.updateHotel(id, hotelDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHotel(@PathVariable Long id) {
        hotelService.deleteHotel(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Hotel> getHotelById(@PathVariable Long id) {
        return ResponseEntity.ok(hotelService.getHotelById(id));
    }

    @GetMapping("/all")
    public ResponseEntity<List<Hotel>> getAllHotels() {
        return ResponseEntity.ok(hotelService.getAllHotels());
    }
}
