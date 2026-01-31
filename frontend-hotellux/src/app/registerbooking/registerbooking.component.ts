import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { RoomService } from '../room.service'; // Import RoomService
import { Router } from '@angular/router';
import { Booking } from '../models/Booking.model';
import { Room } from '../models/Room.model';

@Component({
  selector: 'app-registerbooking',
  templateUrl: './registerbooking.component.html',
  styleUrls: ['./registerbooking.component.css']
})
export class RegisterbookingComponent implements OnInit {
  booking: Booking = {
    id: 0,
    room: { id: 0 },
    checkInDate: new Date(),  // Initialize with current date
    checkOutDate: new Date(), // Initialize with current date
    guestName: '',
    specialRequests: ''
  };
  rooms: Room[] = []; // Array to hold available rooms

  constructor(
    private bookingService: BookingService,
    private roomService: RoomService, // Inject RoomService
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRooms(); // Load rooms when component initializes
  }

  loadRooms(): void {
    this.roomService.getAllRooms().subscribe((data) => {
      this.rooms = data;
    });
  }

  registerBooking(): void {
    this.bookingService.createBooking(this.booking).subscribe(
      () => {
        alert('Booking registered successfully');
        this.router.navigate(['/receptionist']); // Redirect to bookings list or detail page
      },
      (error) => {
        alert('Error registering booking');
        console.error(error);
      }
    );
  }
}
