import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/Booking.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.css']
})
export class BookingEditComponent implements OnInit {
  booking: Booking = { id: 0, room: { id: 0 }, checkInDate: new Date(), checkOutDate: new Date(), guestName: '', specialRequests: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.bookingService.getBookingById(id).subscribe((data) => {
      this.booking = data;
    });
  }

  onSubmit(): void {
    this.bookingService.updateBooking(this.booking.id, this.booking).subscribe(() => {
      this.router.navigate(['/receptionist']);
    });
  }
}
