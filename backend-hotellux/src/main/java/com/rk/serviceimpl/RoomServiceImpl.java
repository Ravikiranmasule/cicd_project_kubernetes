package com.rk.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.entity.Room;
import com.rk.repository.RoomRepository;
import com.rk.service.RoomService;
@Service
public class RoomServiceImpl implements RoomService{
	
	    @Autowired
	    private RoomRepository roomRepository;

	    public List<Room> getAllRooms() {
	        return roomRepository.findAll();
	    }

	    public Optional<Room> getRoomById(Long id) {
	        return roomRepository.findById(id);
	    }

	    public Room createRoom(Room room) {
	        return roomRepository.save(room);
	    }

	    public Room updateRoom(Long id, Room room) {
	        if (roomRepository.existsById(id)) {
	            room.setId(id);
	            return roomRepository.save(room);
	        } else {
	            throw new RuntimeException("Room not found");
	        }
	    }

	    public void deleteRoom(Long id) {
	        roomRepository.deleteById(id);
	    }
	}

