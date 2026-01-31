package com.rk.entity;

import java.util.List;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "menu_items")
public class MenuItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private String category; // e.g., Appetizer, Main Course, Dessert

    @Column(nullable = false)
    private Boolean isVegetarian;

    @Column(nullable = false)
    private Boolean isAvailable;

    @Column(nullable = false)
    private Integer calories;

    @Column(nullable = false)
    private Integer preparationTime; // in minutes

    @ManyToOne
    @JoinColumn(name = "menu_id")
    private Menu menu;

    @OneToMany(mappedBy = "menuItem")
    private List<OrderItem> orderItems;
}
