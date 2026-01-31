// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  role: string | null = null;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.role = this.authService.getRole(); // Fetch role from AuthService
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Check if the user is authenticated
  }

  logout(): void {
    this.authService.logout(); // Logout function
    this.router.navigate(['/login']); // Redirect to login after logout
  }

  getDashboardLink(): string {
    // Return the dashboard link based on the role
    switch (this.role) {
      case 'ADMIN':
        return '/admin-dashboard';
      case 'MANAGER':
        return '/manager-dashboard';
      case 'STAFF':
        return '/staff-dashboard';
      case 'GUEST':
        return '/guest-dashboard';
        case 'CHEF':
          return  '/chef';
           
            case 'SECURITY':
              return  '/security';
              
              case 'MAINTENANCE':
                return'/maintenance-dashboard';
                
                case 'RECEPTIONIST':
                return'/receptionist';
                  
                  case 'HOUSEKEEPING':
                   return'/house-keeping';

                   case 'PR':
                   return'/ returncrm';
                   
                    case 'INVENTORY':
                    return'/inventory-dashboard';
                    
                    case 'ANALYSER':
                      return  '/';
                      
                    case 'HR':
                    
                
                    case 'SALES':
                 
                   
                    case 'SUPPORT':
                   
               
                    case 'MARKETING':
                   
                   
                    case 'EVENTMANAGEMENT':
                     
                     
                   
      default:
        return '/';
    }
  }
}
