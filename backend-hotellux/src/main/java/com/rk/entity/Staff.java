package com.rk.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;



@Data
@Entity
@Table(name = "staff")
public class Staff {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column
    private String position;

    @OneToMany(mappedBy = "assignedTo")
    private Set<HousekeepingSchedule> assignedSchedules;

    @OneToMany(mappedBy = "technicianAssigned")
   private Set<MaintenanceRequest> assignedRequests;
}
