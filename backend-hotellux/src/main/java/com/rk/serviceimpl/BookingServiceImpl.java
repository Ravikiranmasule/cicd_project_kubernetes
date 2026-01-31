package com.rk.serviceimpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rk.entity.Booking;
import com.rk.repository.BookingRepository;
import com.rk.service.BookingService;
@Service
public class BookingServiceImpl implements BookingService {

	    @Autowired
	    private BookingRepository bookingRepository;

	    public List<Booking> getAllBookings() {
	        return bookingRepository.findAll();
	    }

	    public Optional<Booking> getBookingById(Long id) {
	        return bookingRepository.findById(id);
	    }

	    public Booking createBooking(Booking booking) {
	        // Here you should add logic to check room availability and integrate with payment gateway
	        return bookingRepository.save(booking);
	    }

	    public Booking updateBooking(Long id, Booking booking) {
	        if (bookingRepository.existsById(id)) {
	            booking.setId(id);
	            return bookingRepository.save(booking);
	        } else {
	            throw new RuntimeException("Booking not found");
	        }
	    }

	    public void cancelBooking(Long id) {
	        bookingRepository.deleteById(id);
	    }
	}


