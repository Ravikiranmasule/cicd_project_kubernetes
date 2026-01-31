package com.rk.service;

import java.util.List;
import java.util.Optional;

import com.rk.entity.Room;

public interface RoomService {

	List<Room> getAllRooms();

	Optional<Room> getRoomById(Long id);

	Room createRoom(Room room);

	Object updateRoom(Long id, Room room);

	void deleteRoom(Long id);

	

}
