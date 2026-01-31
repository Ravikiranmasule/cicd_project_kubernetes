package com.rk.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name = "rooms")
public class Room {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String category; // e.g., Deluxe, Suite
    
    @Column(nullable = false)
    private String amenities; // e.g., WiFi, TV, AC
    
    @Column(nullable = false)
    private Double price;
    
    @Column
    private String description; // Description of the room
    
    @Column
    private Integer capacity; // Number of guests it can accommodate
    
    @Column
    private String bedType; // Type of bed in the room
    
    @Column
    private Boolean isAvailable; // Availability status
    
    @Column
    private Double rating; // Room rating
    
    @Column
    private String view; // View from the room (e.g., Sea View, City View)
    
    @OneToMany(mappedBy = "room")
    private Set<Booking> bookings; // One-to-many relationship with Booking

    // Getters and Setters
}
