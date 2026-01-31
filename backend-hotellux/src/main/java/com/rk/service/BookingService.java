package com.rk.service;

import java.util.List;
import java.util.Optional;

import com.rk.entity.Booking;

public interface BookingService {

	List<Booking> getAllBookings();

	Optional<Booking> getBookingById(Long id);

	Booking createBooking(Booking booking);

	Object updateBooking(Long id, Booking booking);

	void cancelBooking(Long id);

}
