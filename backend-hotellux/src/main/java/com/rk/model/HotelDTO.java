package com.rk.model;

import lombok.Data;

@Data
public class HotelDTO {
    private String name;
    private String address;
    private Long chainId;  // ID of HotelChain
    private Long brandId;  // ID of HotelBrand
    private Integer rating;
}
