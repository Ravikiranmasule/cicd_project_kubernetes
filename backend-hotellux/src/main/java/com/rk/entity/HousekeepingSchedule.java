package com.rk.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "housekeeping_schedules")
public class HousekeepingSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String scheduleName;

    @Column(nullable = false)
    private LocalDateTime scheduleTime;

    @ManyToOne
    @JoinColumn(name = "staff_id", nullable = false)
    private Staff assignedTo;

    @ManyToOne
    @JoinColumn(name = "room_id", nullable = false)
    @JsonBackReference
    private Room room;

    @Column
    private String taskDescription;

    @Column
    private Boolean isCompleted;

    @Column
    private LocalDateTime completionTime;

    @Column
    private String notes;

    @Column
    private String priority;

    @Column
    private LocalDateTime createdAt;

    @Column
    private LocalDateTime updatedAt;
}
