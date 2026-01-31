package com.rk.controller;




import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.rk.constants.RequestStatus;
import com.rk.entity.MaintenanceRequest;
import com.rk.model.MaintenanceRequestDto;
import com.rk.service.MaintenanceService;

import ch.qos.logback.classic.Logger;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/maintenance")
@PreAuthorize("hasRole('MAINTENANCE')")
public class MaintenanceController {
	
	Logger log=(Logger) LoggerFactory.getLogger(MaintenanceController.class);

    @Autowired
    private MaintenanceService maintenanceService;

    @GetMapping
    public List<MaintenanceRequest> getAllRequests() {
        return maintenanceService.getAllRequests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MaintenanceRequest> getRequestById(@PathVariable Long id) {
        Optional<MaintenanceRequest> request = maintenanceService.getRequestById(id);
        return request.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MaintenanceRequest> createRequest(@RequestBody MaintenanceRequestDto requestDto) {
    	try {
    		 MaintenanceRequest createdRequest = maintenanceService.createRequest(requestDto);
    	       
    	        return ResponseEntity.status(HttpStatus.CREATED).body(createdRequest);
		} catch (Exception e) {
			 log.error(e.getMessage());
			 return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
       
    }

    @PutMapping("/{id}")
    public ResponseEntity<MaintenanceRequest> updateRequest(@PathVariable Long id, @RequestBody MaintenanceRequest request) {
        MaintenanceRequest updatedRequest = maintenanceService.updateRequest(id, request);
        return updatedRequest != null ? ResponseEntity.ok(updatedRequest) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable Long id) {
        maintenanceService.deleteRequest(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/room/{roomId}")
    public List<MaintenanceRequest> getRequestsByRoom(@PathVariable Long roomId) {
        return maintenanceService.getRequestsByRoom(roomId);
    }

    @GetMapping("/technician/{technicianId}")
    public List<MaintenanceRequest> getRequestsByTechnician(@PathVariable Long technicianId) {
        return maintenanceService.getRequestsByTechnician(technicianId);
    }
    @GetMapping("/request-status")
    public List<String> getRequestStatuses() {
        return Arrays.stream(RequestStatus.values())
                .map(Enum::name)
                .collect(Collectors.toList());
    }
}
