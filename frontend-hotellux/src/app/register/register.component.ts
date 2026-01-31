import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  user: User = { username: '', password: '', role: 'GUEST' }; // Default role
  roles: string[] = []; // Roles from the backend

  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loadRoles();
  }

  loadRoles() {
    this.userService.getRoles().subscribe(
      roles => {
        this.roles = roles;
      },
      error => {
        console.error('Error fetching roles:', error);
        alert('Failed to load roles');
      }
    );
  }

  register() {
    this.userService.register(this.user).subscribe(
      () => {
        alert('Registration successful');
        this.router.navigate(['/register']);
      },
      error => {
        console.error('Registration failed:', error);
        alert('Registration failed: ' + error.message);
      }
    );
  }

  logout(): void {
    this.authService.logout(); // Clear localStorage and other logout operations
    this.router.navigate(['/login']); // Redirect to login page
  }
}
