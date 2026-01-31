package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.rk.entity.HotelChain;
import com.rk.service.HotelChainService;

import java.util.List;

@RestController
@RequestMapping("/api/hotel-chains")
@CrossOrigin
public class HotelChainController {
    @Autowired
    private HotelChainService hotelChainService;

    @PostMapping
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<HotelChain> createHotelChain(@RequestBody HotelChain hotelChain) {
        return ResponseEntity.ok(hotelChainService.saveHotelChain(hotelChain));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<HotelChain> updateHotelChain(@PathVariable Long id, @RequestBody HotelChain hotelChain) {
        return ResponseEntity.ok(hotelChainService.updateHotelChain(id, hotelChain));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<Void> deleteHotelChain(@PathVariable Long id) {
        hotelChainService.deleteHotelChain(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<HotelChain> getHotelChainById(@PathVariable Long id) {
        return ResponseEntity.ok(hotelChainService.getHotelChainById(id));
    }

    @GetMapping("/all")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<List<HotelChain>> getAllHotelChains() {
        return ResponseEntity.ok(hotelChainService.getAllHotelChains());
    }
}
