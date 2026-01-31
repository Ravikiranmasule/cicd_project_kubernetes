package com.rk.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.List;

@Data
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime orderTime;

    @Column(nullable = false)
    private String status; // e.g., Pending, In Progress, Completed, Cancelled

    @Column(nullable = false)
    private String customerName;

    @Column(nullable = false)
    private String customerRoomNumber;

    @Column(nullable = false)
    private Double totalPrice;

    @Column(nullable = false)
    private String paymentStatus; // e.g., Paid, Unpaid

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;

    @OneToMany(mappedBy = "order")
    private List<OrderItem> orderItems;
}
