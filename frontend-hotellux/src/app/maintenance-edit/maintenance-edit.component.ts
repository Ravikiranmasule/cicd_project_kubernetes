import { Component, OnInit } from '@angular/core';
import { MaintenanceRequest } from '../models/MaintenanceRequest.model';
import { MaintenanceService } from '../maintenance.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-maintenance-edit',
  templateUrl: './maintenance-edit.component.html',
  styleUrls: ['./maintenance-edit.component.css']
})
export class MaintenanceEditComponent implements OnInit {

  request: MaintenanceRequest | null = null;

  constructor(private maintenanceService: MaintenanceService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.maintenanceService.getRequestById(id).subscribe(
      (data) => this.request = data,
      (error) => console.error('Error loading request', error)
    );
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
