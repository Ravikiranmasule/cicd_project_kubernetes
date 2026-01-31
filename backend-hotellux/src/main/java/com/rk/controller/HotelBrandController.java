package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import com.rk.entity.HotelBrand;
import com.rk.service.HotelBrandService;

import java.util.List;

@RestController
@RequestMapping("/api/hotel-brands")
@CrossOrigin
public class HotelBrandController {
    @Autowired
    private HotelBrandService hotelBrandService;

    @PostMapping
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<HotelBrand> createHotelBrand(@RequestBody HotelBrand hotelBrand) {
        return ResponseEntity.ok(hotelBrandService.saveHotelBrand(hotelBrand));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<HotelBrand> updateHotelBrand(@PathVariable Long id, @RequestBody HotelBrand hotelBrand) {
        return ResponseEntity.ok(hotelBrandService.updateHotelBrand(id, hotelBrand));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<Void> deleteHotelBrand(@PathVariable Long id) {
        hotelBrandService.deleteHotelBrand(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<HotelBrand> getHotelBrandById(@PathVariable Long id) {
        return ResponseEntity.ok(hotelBrandService.getHotelBrandById(id));
    }
    @GetMapping("/all")
    @PreAuthorize("hasRole('MANAGER')")
    public ResponseEntity<List<HotelBrand>> getAllHotelBrands() {
        return ResponseEntity.ok(hotelBrandService.getAllHotelBrands());
    }
}
