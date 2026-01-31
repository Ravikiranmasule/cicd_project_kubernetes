// src/app/maintenance-register/maintenance-register.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaintenanceService } from '../maintenance.service';
import { RoomService } from '../room.service';
import { StaffService } from '../staff.service';
import { MaintenanceRequest } from '../models/MaintenanceRequest.model';
import { Room } from '../models/Room.model';
import { Staff } from '../models/Staff.model';
import { MaintenanceRequestPayload } from '../models/MaintenanceRequestPayload.model';

@Component({
  selector: 'app-maintenance-register',
  templateUrl: './maintenance-register.component.html',
  styleUrls: ['./maintenance-register.component.css']
})
export class MaintenanceRegisterComponent implements OnInit {
  request: MaintenanceRequestPayload = {
    description: '',
    status: 'PENDING',
    roomId: 0,
    requestTime: new Date(),
    completionTime: new Date(),
    technicianAssignedId: 0,
    notes: '',
    priority: '',
    createdAt: new Date(),
    updatedAt: new Date(),
    reportedBy: ''
  };

  statuses: string[] = [];
  rooms: Room[] = [];
  technicians: Staff[] = [];
  priorities: string[] = ['Low', 'Medium', 'High']; // Hardcoded priorities

  constructor(
    private maintenanceService: MaintenanceService,
    private roomService: RoomService,
    private staffService: StaffService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchStatuses();
    this.fetchRooms();
    this.fetchTechnicians();
  }

  fetchStatuses(): void {
    this.maintenanceService.getRequestStatuses().subscribe(
      (statuses) => this.statuses = statuses,
      (error) => console.error('Error fetching request statuses', error)
    );
  }

  fetchRooms(): void {
    this.roomService.getAllRooms().subscribe(
      (rooms) => this.rooms = rooms,
      
      (error) => console.error('Error fetching rooms', error)
    );
  }

  fetchTechnicians(): void {
    this.staffService.getAllStaff().subscribe(
      (technicians) => this.technicians = technicians,
      (error) => console.error('Error fetching technicians', error)
    );
  }

  registerRequest(): void {
    this.maintenanceService.createRequest(this.request).subscribe(
      () => {
        alert('Request registered successfully');
        this.router.navigate(['/maintenance-dashboard']);
      },
      (error) => {
        alert('Error registering request');
        console.error(error);
      }
    );
  }

  onRequestTimeChange(value: string): void {
    this.request.requestTime = new Date(value);
  }

  onCompletionTimeChange(value: string): void {
    this.request.completionTime = new Date(value) ;
  }

  onCreatedAtChange(value: string): void {
    this.request.createdAt = new Date(value);
  }

  onUpdatedAtChange(value: string): void {
    this.request.updatedAt = new Date(value);
  }
}
