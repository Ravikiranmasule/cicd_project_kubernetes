package com.rk.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Data
@Table(name = "bookings")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    private Room room; // Many-to-one relationship with Room

    @Column(nullable = false)
    private LocalDate checkInDate;

    @Column(nullable = false)
    private LocalDate checkOutDate;

    @Column(nullable = false)
    private String guestName;

    @Column
    private String specialRequests;

    @Column
    private Double totalPrice; // Total price for the booking

    @Column
    private String bookingStatus; // Status of the booking (e.g., Confirmed, Canceled)

    @Column
    private LocalDate bookingDate; // Date of booking creation

    @Column
    private Integer numberOfGuests; // Number of guests for the booking

    @Column
    private String paymentMethod; // Payment method used (e.g., Credit Card, PayPal)

    @Column
    private String confirmationNumber; // Confirmation number for the booking

    // Getters and Setters
}
