import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff.service';
import { Staff } from '../models/Staff.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-staff-dash-board',
  templateUrl: './staff-dash-board.component.html',
  styleUrls: ['./staff-dash-board.component.css']
})
export class StaffDashBoardComponent implements OnInit {

  staffList: Staff[] = [];

  constructor(private staffService: StaffService,private router:Router,private authService:AuthService) {}

  ngOnInit(): void {
    this.staffService.getAllStaff().subscribe(
      (data) => this.staffList = data,
      (error) => console.error('Error fetching staff', error)
    );
  }
logout(){
  this.authService.logout();
  this.router.navigate(['/']);
}
}
