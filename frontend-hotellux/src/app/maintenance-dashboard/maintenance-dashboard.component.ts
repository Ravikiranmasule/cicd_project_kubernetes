import { Component, OnInit } from '@angular/core';
import { MaintenanceRequest } from '../models/MaintenanceRequest.model';
import { MaintenanceService } from '../maintenance.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-maintenance-dashboard',
  templateUrl: './maintenance-dashboard.component.html',
  styleUrls: ['./maintenance-dashboard.component.css']
})
export class MaintenanceDashboardComponent implements OnInit {

  requests: MaintenanceRequest[] = [];

  constructor(private maintenanceService: MaintenanceService,private router:Router,private authService:AuthService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.maintenanceService.getAllRequests().subscribe(
      (data) => this.requests = data,
      (error) => console.error('Error loading requests', error)
    );
  }
 logout():void{
this.authService.logout();
this.router.navigate(['/']);
 }
}
