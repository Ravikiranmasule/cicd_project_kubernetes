package com.rk.service;

import java.util.List;
import java.util.Optional;

import com.rk.entity.HousekeepingSchedule;
import com.rk.entity.Room;

public interface HousekeepingService {

	List<HousekeepingSchedule> getAllSchedules();

	Optional<HousekeepingSchedule> getScheduleById(Long id);

	HousekeepingSchedule createSchedule(HousekeepingSchedule schedule);

	HousekeepingSchedule updateSchedule(Long id, HousekeepingSchedule schedule);

	void deleteSchedule(Long id);

	Optional<Room> getSchedulesByRoom(Long roomId);

	List<HousekeepingSchedule> getSchedulesByStaff(Long staffId);

}
