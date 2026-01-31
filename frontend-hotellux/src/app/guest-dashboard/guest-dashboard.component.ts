import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-guest-dashboard',
  templateUrl: './guest-dashboard.component.html',
  styleUrls: ['./guest-dashboard.component.css']
})
export class GuestDashboardComponent implements OnInit {
 // Inject AuthService
   // Inject AuthService
   role: string | null = null;
   
  constructor( private router: Router ,
    private authService: AuthService ) { }

  ngOnInit(): void {
    this.role = this.authService.getRole();
  }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Check if the user is authenticated
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
    }}
  logout(): void {
    this.authService.logout(); // Clear localStorage and other logout operations
    this.router.navigate(['/']); // Redirect to login page
  }
  
}
