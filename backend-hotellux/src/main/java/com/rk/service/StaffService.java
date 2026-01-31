package com.rk.service;

import java.util.List;
import java.util.Optional;

import com.rk.entity.Staff;

public interface StaffService {

	List<Staff> getAllStaff();

	Optional<Staff> getStaffById(Long id);

	Staff createStaff(Staff staff);

	Staff updateStaff(Long id, Staff staff);

	void deleteStaff(Long id);

}
