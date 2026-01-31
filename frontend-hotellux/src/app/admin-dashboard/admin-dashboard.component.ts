import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;
  searchKeyword:string="";

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
     
    }, error => {
      console.error('Error fetching users', error);
    });
  }

  deleteUser(userId: number): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(userId).subscribe(() => {
        alert('User deleted');
        this.getAllUsers();
      }, error => {
        console.error('Error deleting user', error);
      });
    }
  }

  viewUserDetails(userId: number): void {
    this.router.navigate(['/user-details', userId]);
  }

  editUser(userId: number): void {
    this.router.navigate(['/user-edit', userId]);
  }

  searchUser(){
if (this.searchKeyword.trim()) {
  this.userService.searchUser(this.searchKeyword).subscribe(users=>
    {
      this.users=users;
    },
    error=>{
      console.error('error searching users',error);
    }
  );
  
} else {
  this.getAllUsers();
}
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
