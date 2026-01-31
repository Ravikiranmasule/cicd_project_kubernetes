package com.rk.serviceimpl;

import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.constants.RequestStatus;
import com.rk.entity.MaintenanceRequest;
import com.rk.entity.Room;
import com.rk.entity.Staff;
import com.rk.model.MaintenanceRequestDto;
import com.rk.repository.MaintenanceRepository;
import com.rk.repository.RoomRepository;
import com.rk.repository.StaffRepository;
import com.rk.service.MaintenanceService;

import ch.qos.logback.classic.Logger;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class MaintenanceServiceImpl implements MaintenanceService {
	
	Logger log=(Logger) LoggerFactory.getLogger(MaintenanceServiceImpl.class);
	@Autowired
	RoomRepository roomRepo;
	
	@Autowired
	StaffRepository staffRepo;

    @Autowired
    private MaintenanceRepository maintenanceRepository;
    @Autowired
    StaffRepository staffRepository;

    public List<MaintenanceRequest> getAllRequests() {
        return maintenanceRepository.findAll();
    }

    public Optional<MaintenanceRequest> getRequestById(Long id) {
        return maintenanceRepository.findById(id);
    }
    public MaintenanceRequest createRequest(MaintenanceRequestDto requestDto) {
        // Ensure that the technicianAssigned is fetched correctly
    	MaintenanceRequest request=new MaintenanceRequest();
    	requestDto.setCreatedAt(LocalDateTime.now());
        requestDto.setUpdatedAt(LocalDateTime.now());
        
      
       BeanUtils.copyProperties(requestDto, request);
       Optional<Room> byId = roomRepo.findById(requestDto.getRoomId());
       Room room = byId.get();
       request.setRoom(room);
       Staff staff = staffRepo.findById(requestDto.getTechnicianAssignedId()).get();
       request.setTechnicianAssigned(staff);
       RequestStatus status = RequestStatus.valueOf(requestDto.getStatus().toUpperCase());
       request.setStatus(status);
       System.out.println(request);
       MaintenanceRequest savedMaintenance = maintenanceRepository.save(request);
        return savedMaintenance;
    }

   

    public MaintenanceRequest updateRequest(Long id, MaintenanceRequest request) {
        if (maintenanceRepository.existsById(id)) {
            request.setId(id);
            request.setUpdatedAt(LocalDateTime.now());
            return maintenanceRepository.save(request);
        }
        return null;
    }

    public void deleteRequest(Long id) {
        maintenanceRepository.deleteById(id);
    }

    public List<MaintenanceRequest> getRequestsByRoom(Long roomId) {
        return maintenanceRepository.findByRoomId(roomId);
    }

    public List<MaintenanceRequest> getRequestsByTechnician(Long technicianId) {
        return maintenanceRepository.findByTechnicianAssigned_Id(technicianId);
    }
}
