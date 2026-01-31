package com.rk.model;

import java.util.List;

import com.rk.entity.Hotel;
import com.rk.entity.Menu;
import com.rk.entity.Order;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RestaurantDto {
	

	    @Column(nullable = false)
	    private String name;

	    @Column(nullable = false)
	    private String location;

	    @Column(nullable = false)
	    private String contactNumber;

	    @Column(nullable = false)
	    private String email;

	    @Column(nullable = false)
	    private String openingHours;

	    @Column(nullable = false)
	    private String closingHours;

	    @Column(nullable = false)
	    private String cuisineType;

	    @Column(nullable = false)
	    private Double averageCostForTwo;

	    @Column(nullable = false)
	    private Double rating;

	    @Column(nullable = false)
	    private Long hotelId;

	  
}
