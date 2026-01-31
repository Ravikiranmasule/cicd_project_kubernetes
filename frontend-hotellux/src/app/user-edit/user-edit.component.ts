import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User | null = null;
  roles: string[] = []; // Will be populated dynamically

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadRoles();
    this.loadUser();
  }

  loadRoles(): void {
    this.userService.getRoles().subscribe(
      (roles: string[]) => {
        this.roles = roles;
      },
      (error: any) => {
        console.error('Error fetching roles', error);
      }
    );
  }

  loadUser(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(+userId).subscribe(
        (user: User) => {
          this.user = user;
        },
        (error: any) => {
          console.error('Error fetching user', error);
        }
      );
    }
  }

  updateUser(): void {
    if (this.user) {
      this.userService.updateUser(this.user.id!, this.user).subscribe(
        () => {
          alert('User updated successfully');
          this.router.navigate(['/admin-dashboard']);
        },
        (error: any) => {
          console.error('Error updating user', error);
        }
      );
    }
  }

  cancel(): void {
    this.router.navigate(['/admin-dashboard']);
  }
}
