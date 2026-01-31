import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {
  userId!: number;
  user!: User;

  constructor(private userService: UserService, private route: ActivatedRoute,private router: Router ,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.userId = +params.get('id')!;
      this.loadUser();
    });
  }

  loadUser(): void {
    this.userService.getUserById(this.userId).subscribe(user => {
      this.user = user;
    }, error => {
      console.error('Failed to load user:', error);
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.userId, this.user).subscribe(() => {
      alert('User updated successfully');
    }, error => {
      console.error('Failed to update user:', error);
    });
  }

  deleteUser(): void {
    if (confirm('Are you sure you want to delete this user?')) {
      this.userService.deleteUser(this.userId).subscribe(() => {
        alert('User deleted successfully');
        this.router.navigate(['/users']); // Navigate to the user list or any other page
      }, error => {
        console.error('Failed to delete user:', error);
      });
    }
  }
  logout(): void {
    this.authService.logout(); // Clear localStorage and other logout operations
    this.router.navigate(['/login']); // Redirect to login page
  }
}
