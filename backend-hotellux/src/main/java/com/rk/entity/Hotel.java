package com.rk.entity;



import java.util.List;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "hotels")
@Getter
@Setter
@ToString
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String address;

    @ManyToOne
    @JoinColumn(name = "chain_id", nullable = false)
    private HotelChain chain;

    @ManyToOne
    @JoinColumn(name = "brand_id", nullable = false)
    private HotelBrand brand;

    @Column
    private Integer starRating; // Example of additional property
//    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL)
//    private List<Restaurant> restaurants;
}

