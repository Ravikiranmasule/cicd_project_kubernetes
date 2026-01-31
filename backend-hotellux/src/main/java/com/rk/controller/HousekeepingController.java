package com.rk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.rk.entity.HousekeepingSchedule;
import com.rk.entity.Room;
import com.rk.service.HousekeepingService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/housekeeping")
@PreAuthorize("hasRole('HOUSEKEEPING')")
public class HousekeepingController {

    @Autowired
    private HousekeepingService housekeepingService;

    @GetMapping
    public List<HousekeepingSchedule> getAllSchedules() {
        return housekeepingService.getAllSchedules();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HousekeepingSchedule> getScheduleById(@PathVariable Long id) {
        Optional<HousekeepingSchedule> schedule = housekeepingService.getScheduleById(id);
        return schedule.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<HousekeepingSchedule> createSchedule(@RequestBody HousekeepingSchedule schedule) {
        HousekeepingSchedule createdSchedule = housekeepingService.createSchedule(schedule);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdSchedule);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HousekeepingSchedule> updateSchedule(@PathVariable Long id, @RequestBody HousekeepingSchedule schedule) {
        HousekeepingSchedule updatedSchedule = housekeepingService.updateSchedule(id, schedule);
        return updatedSchedule != null ? ResponseEntity.ok(updatedSchedule) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSchedule(@PathVariable Long id) {
        housekeepingService.deleteSchedule(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/room/{roomId}")
    public Optional<Room> getSchedulesByRoom(@PathVariable Long roomId) {
        return housekeepingService.getSchedulesByRoom(roomId);
    }

    @GetMapping("/staff/{staffId}")
    public List<HousekeepingSchedule> getSchedulesByStaff(@PathVariable Long staffId) {
        return housekeepingService.getSchedulesByStaff(staffId);
    }
}