// src/app/staff-dashboard/staff-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Room } from '../models/Room.model';
import { RoomService } from '../room.service';
import { Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-staff-dashboard',
  templateUrl: './staff-dashboard.component.html',
  styleUrls: ['./staff-dashboard.component.css']
})
export class StaffDashboardComponent implements OnInit {

  rooms: Room[] = [];

  constructor(private roomService: RoomService,private router:Router,private authService:AuthService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getAllRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  deleteRoom(id: number): void {
    this.roomService.deleteRoom(id).subscribe(() => {
      this.loadRooms();
    });
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
