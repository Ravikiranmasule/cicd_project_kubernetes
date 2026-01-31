package com.rk.model;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@ToString
public class InventoryItemDTO {
	

    private String itemName;

  
    private Integer quantity;

    private Long supplier_id;

    
    private Date lastOrdered;

    private Date nextOrderDate;

   
    private Double unitPrice;


    private String itemCategory; // e.g., Linens, Toiletries

}
