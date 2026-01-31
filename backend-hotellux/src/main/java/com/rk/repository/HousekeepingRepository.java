package com.rk.repository;

import com.rk.entity.HousekeepingSchedule;
import com.rk.entity.Room;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface HousekeepingRepository extends JpaRepository<HousekeepingSchedule, Long> {
    Optional<Room> findByRoomId(Long roomId);

    // Correct method to find by staff's ID
    List<HousekeepingSchedule> findByAssignedTo_Id(Long staffId);
}
