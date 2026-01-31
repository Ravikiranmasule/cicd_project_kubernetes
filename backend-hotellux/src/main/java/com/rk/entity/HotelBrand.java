package com.rk.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "hotel_brands")
@Data
public class HotelBrand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column
    private String description; // Example of additional property
}
