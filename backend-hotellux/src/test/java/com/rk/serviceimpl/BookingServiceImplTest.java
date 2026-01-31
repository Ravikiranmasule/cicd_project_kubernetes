package com.rk.serviceimpl;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

import com.rk.entity.Booking;
import com.rk.repository.BookingRepository;
import com.rk.service.BookingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

public class BookingServiceImplTest {

    @Mock
    private BookingRepository bookingRepository;

    @InjectMocks
    private BookingServiceImpl bookingService;

    private Booking booking;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        booking = new Booking();
        booking.setId(1L);
        booking.setGuestName("Test Booking"); // assuming Booking has a name field
    }

    @Test
    public void testGetAllBookings() {
        // Arrange
        when(bookingRepository.findAll()).thenReturn(Collections.singletonList(booking));

        // Act
        List<Booking> bookings = bookingService.getAllBookings();

        // Assert
        assertNotNull(bookings);
        assertEquals(1, bookings.size());
        assertEquals("Test Booking", bookings.get(0).getGuestName());
    }

    @Test
    public void testGetBookingById() {
        // Arrange
        when(bookingRepository.findById(anyLong())).thenReturn(Optional.of(booking));

        // Act
        Optional<Booking> foundBooking = bookingService.getBookingById(1L);

        // Assert
        assertTrue(foundBooking.isPresent());
        assertEquals("Test Booking", foundBooking.get().getGuestName());
    }

    @Test
    public void testGetBookingByIdNotFound() {
        // Arrange
        when(bookingRepository.findById(anyLong())).thenReturn(Optional.empty());

        // Act
        Optional<Booking> foundBooking = bookingService.getBookingById(1L);

        // Assert
        assertFalse(foundBooking.isPresent());
    }

    @Test
    public void testCreateBooking() {
        // Arrange
        when(bookingRepository.save(any(Booking.class))).thenReturn(booking);

        // Act
        Booking createdBooking = bookingService.createBooking(booking);

        // Assert
        assertNotNull(createdBooking);
        assertEquals("Test Booking", createdBooking.getGuestName());
        verify(bookingRepository, times(1)).save(booking);
    }

    @Test
    public void testUpdateBooking() {
        // Arrange
        when(bookingRepository.existsById(anyLong())).thenReturn(true);
        when(bookingRepository.save(any(Booking.class))).thenReturn(booking);

        // Act
        Booking updatedBooking = bookingService.updateBooking(1L, booking);

        // Assert
        assertNotNull(updatedBooking);
        assertEquals("Test Booking", updatedBooking.getGuestName());
        verify(bookingRepository, times(1)).save(booking);
    }

    @Test
    public void testUpdateBookingNotFound() {
        // Arrange
        when(bookingRepository.existsById(anyLong())).thenReturn(false);

        // Act & Assert
        RuntimeException thrown = assertThrows(RuntimeException.class, () -> {
            bookingService.updateBooking(1L, booking);
        });
        assertEquals("Booking not found", thrown.getMessage());
    }

    @Test
    public void testCancelBooking() {
        // Arrange
        doNothing().when(bookingRepository).deleteById(anyLong());

        // Act
        bookingService.cancelBooking(1L);

        // Assert
        verify(bookingRepository, times(1)).deleteById(1L);
    }
}
