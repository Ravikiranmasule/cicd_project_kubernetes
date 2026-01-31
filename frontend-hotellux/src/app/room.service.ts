// src/app/services/room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './models/Room.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.configService.roomsEndpoint, {
      headers: this.getAuthHeaders()
    });
  }

  getRoomById(id: number): Observable<Room> {
    return this.http.get<Room>(`${this.configService.roomsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createRoom(room: Room): Observable<Room> {
    return this.http.post<Room>(this.configService.roomsEndpoint, room, {
      headers: this.getAuthHeaders()
    });
  }

  updateRoom(id: number, room: Room): Observable<Room> {
    return this.http.put<Room>(`${this.configService.roomsEndpoint}/${id}`, room, {
      headers: this.getAuthHeaders()
    });
  }

  deleteRoom(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.roomsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
