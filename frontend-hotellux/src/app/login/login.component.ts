import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service'; // Import AuthService

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(
    private userService: UserService,
    private authService: AuthService, // Inject AuthService
    private router: Router
  ) { }

  login() {
    this.userService.login(this.username, this.password).subscribe(response => {
      localStorage.setItem('authToken', response.token); // Store token as 'authToken'
      localStorage.setItem('role', response.role); // Store role

      // Redirect based on the user's role
      switch (response.role) {
        case 'ADMIN':
          this.router.navigate(['/admin-dashboard']);
          break;
        case 'MANAGER':
          this.router.navigate(['/manager-dashboard']);
          break;
        case 'STAFF':
          this.router.navigate(['/staff-dashboard']);
          break;
        case 'GUEST':
          this.router.navigate(['/guest-dashboard']);
          break;
          case 'CHEF':
            this.router.navigate(['/chef']);
            break;
            case 'SECURITY':
              this.router.navigate(['/security']);
              break;
              case 'MAINTENANCE':
                this.router.navigate(['/maintenance-dashboard']);
                break;
                case 'RECEPTIONIST':
                  this.router.navigate(['/receptionist']);
                  break;
                  case 'HOUSEKEEPING':
                    this.router.navigate(['/house-keeping']);
                    break;
                    case 'PR':
                    this.router.navigate(['/crm']);
                    break;
                    case 'INVENTORY':
                    this.router.navigate(['/inventory-dashboard']);
                    break;
                    case 'ANALYSER':
                      this.router.navigate(['/']);
                      break;
                    case 'HR':
                    this.router.navigate(['/']);
                    break;
                    case 'SALES':
                    this.router.navigate(['/']);
                    break;
                    case 'SUPPORT':
                    this.router.navigate(['/']);
                    break;
                    case 'MARKETING':
                    this.router.navigate(['/']);
                    break;
                    case 'EVENTMANAGEMENT':
                      this.router.navigate(['/']);
                      break;
        default:
          alert('Unknown role');
      }
    }, error => {
      console.error('Login error:', error);
      alert('Login failed');
    });
  }

 

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Check if the user is logged in
  }
}
