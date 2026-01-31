import { Component, OnInit } from '@angular/core';
import { Booking } from '../models/Booking.model';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {
  booking: Booking | undefined;

  constructor(private route: ActivatedRoute, private bookingService: BookingService) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.bookingService.getBookingById(id).subscribe((data) => {
      this.booking = data;
    });
  }
}
