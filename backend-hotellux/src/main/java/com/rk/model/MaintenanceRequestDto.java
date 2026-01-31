// src/main/java/com/rk/dto/MaintenanceRequestDto.java
package com.rk.model;

import java.time.LocalDateTime;

import com.rk.entity.Room;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MaintenanceRequestDto {
    private String description;
    private String status;
    private Long roomId; // Or Room ID
    private String reportedBy;
    private LocalDateTime requestTime;
    private LocalDateTime completionTime;
    private Long technicianAssignedId; // ID of the Staff
    private String notes;
    private String priority;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    // Getters and Setters
}
