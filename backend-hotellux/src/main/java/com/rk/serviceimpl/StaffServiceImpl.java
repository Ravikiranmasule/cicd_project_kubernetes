package com.rk.serviceimpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.entity.Staff;
import com.rk.repository.StaffRepository;
import com.rk.service.StaffService;

import java.util.List;
import java.util.Optional;
@Service
public class StaffServiceImpl implements StaffService {
	

	    @Autowired
	    private StaffRepository staffRepository;

	    public List<Staff> getAllStaff() {
	        return staffRepository.findAll();
	    }

	    public Optional<Staff> getStaffById(Long id) {
	        return staffRepository.findById(id);
	    }

	    public Staff createStaff(Staff staff) {
	        return staffRepository.save(staff);
	    }

	    public Staff updateStaff(Long id, Staff staff) {
	        if (staffRepository.existsById(id)) {
	            staff.setId(id);
	            return staffRepository.save(staff);
	        }
	        return null;
	    }

	    public void deleteStaff(Long id) {
	        staffRepository.deleteById(id);
	    }
	}


