package com.rk.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.entity.HousekeepingSchedule;
import com.rk.entity.Room;
import com.rk.repository.HousekeepingRepository;
import com.rk.repository.RoomRepository;
import com.rk.service.HousekeepingService;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class HousekeepingServiceImpl implements HousekeepingService {

    @Autowired
    private HousekeepingRepository housekeepingRepository;

    @Autowired
    private RoomRepository roomRepository;

    public List<HousekeepingSchedule> getAllSchedules() {
        return housekeepingRepository.findAll();
    }

    public Optional<HousekeepingSchedule> getScheduleById(Long id) {
        return housekeepingRepository.findById(id);
    }

    public HousekeepingSchedule createSchedule(HousekeepingSchedule schedule) {
        schedule.setCreatedAt(LocalDateTime.now());
        schedule.setUpdatedAt(LocalDateTime.now());
        return housekeepingRepository.save(schedule);
    }

    public HousekeepingSchedule updateSchedule(Long id, HousekeepingSchedule schedule) {
        if (housekeepingRepository.existsById(id)) {
            schedule.setId(id);
            schedule.setUpdatedAt(LocalDateTime.now());
            return housekeepingRepository.save(schedule);
        }
        return null;
    }

    public void deleteSchedule(Long id) {
        housekeepingRepository.deleteById(id);
    }

    public Optional<Room> getSchedulesByRoom(Long roomId) {
        return housekeepingRepository.findByRoomId(roomId);
    }

    public List<HousekeepingSchedule> getSchedulesByStaff(Long staffId) {
        return housekeepingRepository.findByAssignedTo_Id(staffId);
    }
}
