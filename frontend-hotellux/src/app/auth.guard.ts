import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      
    const expectedRole = route.data['role'];

    if (this.authService.isAuthenticated()) {
      const userRole = this.authService.getRole();

      if (expectedRole && expectedRole !== userRole) {
        // If the user role doesn't match the expected role, redirect to home page
        this.router.navigate(['/home']);
        return false;
      }

      return true; // Allow access if authenticated and role matches
    }

    // Redirect to login page if not authenticated
    this.router.navigate(['/login']);
    return false;
  }
}
