import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Router } from '@angular/router';
import { Staff } from '../models/Staff.model';

@Component({
  selector: 'app-staff-dash-register',
  templateUrl: './staff-dash-register.component.html',
  styleUrls: ['./staff-dash-register.component.css']
})
export class StaffDashRegisterComponent implements OnInit {

  staff: Staff = {
    id: 0,
    name: '',
    position: ''
  };

  constructor(private staffService: StaffService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createStaff(): void {
    this.staffService.createStaff(this.staff).subscribe(
      () => {
        alert('Staff created successfully');
        this.router.navigate(['/staff']);
      },
      (error) => {
        alert('Error creating staff');
        console.error(error);
      }
    );
  }

}
