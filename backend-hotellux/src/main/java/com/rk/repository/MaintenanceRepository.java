package com.rk.repository;

import com.rk.entity.MaintenanceRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MaintenanceRepository extends JpaRepository<MaintenanceRequest, Long> {
    List<MaintenanceRequest> findByRoomId(Long roomId);

    // Correct method to find by technician's ID
    List<MaintenanceRequest> findByTechnicianAssigned_Id(Long technicianId);
}
