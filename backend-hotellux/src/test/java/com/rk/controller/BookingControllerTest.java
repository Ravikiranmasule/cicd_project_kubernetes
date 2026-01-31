package com.rk.controller;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.*;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.rk.entity.Booking;
import com.rk.service.BookingService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;
import java.util.Optional;

@WebMvcTest(BookingController.class)
@WithMockUser(roles = "RECEPTIONIST")  // Simulates a user with the required role
public class BookingControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private BookingService bookingService;

    @Autowired
    private ObjectMapper objectMapper;

    private Booking booking;

    @BeforeEach
    public void setUp() {
        booking = new Booking();
        booking.setId(1L);
        booking.setGuestName("Test Booking"); // assuming Booking has a name field
    }

    @Test
    public void testGetAllBookings() throws Exception {
        // Arrange
        when(bookingService.getAllBookings()).thenReturn(List.of(booking));

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/api/bookings")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].name").value("Test Booking"));
    }

    @Test
    public void testGetBookingById() throws Exception {
        // Arrange
        when(bookingService.getBookingById(anyLong())).thenReturn(Optional.of(booking));

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/api/bookings/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Booking"));
    }

    @Test
    public void testGetBookingByIdNotFound() throws Exception {
        // Arrange
        when(bookingService.getBookingById(anyLong())).thenReturn(Optional.empty());

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.get("/api/bookings/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void testCreateBooking() throws Exception {
        // Arrange
        when(bookingService.createBooking(any(Booking.class))).thenReturn(booking);

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.post("/api/bookings")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(booking)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Booking"));
    }

    @Test
    public void testUpdateBooking() throws Exception {
        // Arrange
        when(bookingService.updateBooking(anyLong(), any(Booking.class))).thenReturn(booking);

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.put("/api/bookings/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(booking)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.name").value("Test Booking"));
    }

    @Test
    public void testUpdateBookingNotFound() throws Exception {
        // Arrange
        when(bookingService.updateBooking(anyLong(), any(Booking.class)))
            .thenThrow(new RuntimeException("Booking not found"));

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.put("/api/bookings/1")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(booking)))
                .andExpect(MockMvcResultMatchers.status().isNotFound());
    }

    @Test
    public void testCancelBooking() throws Exception {
        // Arrange
        doNothing().when(bookingService).cancelBooking(anyLong());

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.delete("/api/bookings/1")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isNoContent());
    }
}
