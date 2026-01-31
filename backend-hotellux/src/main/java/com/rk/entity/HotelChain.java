package com.rk.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "hotel_chains")
@Data
public class HotelChain {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    @Column
    private String headquarters; // Example of additional property
}
