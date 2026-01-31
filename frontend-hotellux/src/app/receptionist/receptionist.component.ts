import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/Booking.model';
import { BookingService } from '../booking.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-receptionist',
  templateUrl: './receptionist.component.html',
  styleUrls: ['./receptionist.component.css']
})
export class ReceptionistComponent implements OnInit {
  bookings: Booking[] = [];

  constructor(private bookingService: BookingService, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.getAllBookings();
  }

  getAllBookings(): void {
    this.bookingService.getAllBookings().subscribe((data) => {
      this.bookings = data;
    });
  }

  cancelBooking(id: number): void {
    this.bookingService.cancelBooking(id).subscribe(() => {
      if(confirm("Do you want to delete this record")){
      this.getAllBookings(); // Refresh the list after cancellation
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
