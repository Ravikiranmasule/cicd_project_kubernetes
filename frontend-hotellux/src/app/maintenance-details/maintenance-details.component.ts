import { Component, OnInit } from '@angular/core';
import { MaintenanceRequest } from '../models/MaintenanceRequest.model';
import { MaintenanceService } from '../maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-details',
  templateUrl: './maintenance-details.component.html',
  styleUrls: ['./maintenance-details.component.css']
})
export class MaintenanceDetailsComponent implements OnInit {

  request: MaintenanceRequest = {
    id: 0,
    description: '',
    status: 'PENDING', // Default value or handle it as needed
    room: { id: 0, name: '', category: '', amenities: '', price: 0 },
    reportedBy: '',
    requestTime: new Date(),
    completionTime: undefined,
    technicianAssigned: undefined,
    notes: '',
    priority: '',
    createdAt: new Date(),
    updatedAt: new Date()
  };
  statuses: string[] = [];

  constructor(
    private statusService: MaintenanceService,
    private maintenanceService: MaintenanceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.statusService.getRequestStatuses().subscribe(
      (statuses) => this.statuses = statuses,
      (error) => console.error('Error fetching request statuses', error)
    );

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.maintenanceService.getRequestById(Number(id)).subscribe(
        (request) => this.request = request,
        (error) => console.error('Error fetching request details', error)
      );
    }
  }

  updateRequest(): void {
    if (this.request) {
      this.maintenanceService.updateRequest(this.request.id, this.request).subscribe(
        () => {
          alert('Request updated successfully');
          this.router.navigate(['/dashboard']);
        },
        (error) => {
          alert('Error updating request');
          console.error(error);
        }
      );
    }
  }
}
