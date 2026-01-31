// booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Booking } from './models/Booking.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.configService.bookingsEndpoint, {
      headers: this.getAuthHeaders()
    });
  }

  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.configService.bookingsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.configService.bookingsEndpoint, booking, {
      headers: this.getAuthHeaders()
    });
  }

  updateBooking(id: number, booking: Booking): Observable<Booking> {
    return this.http.put<Booking>(`${this.configService.bookingsEndpoint}/${id}`, booking, {
      headers: this.getAuthHeaders()
    });
  }

  cancelBooking(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.bookingsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}