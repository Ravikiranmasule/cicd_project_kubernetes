package com.rk.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rk.entity.Room;

public interface RoomRepository extends JpaRepository<Room, Long> {
}

