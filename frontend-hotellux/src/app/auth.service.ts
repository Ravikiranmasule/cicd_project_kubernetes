import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  getToken() {
    throw new Error('Method not implemented.');
  }
  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); // Look for 'authToken'
  }

  getRole(): string {
    return localStorage.getItem('role') || 'guest';
  }

  login(token: string, role: string): void {
    localStorage.setItem('authToken', token);
    localStorage.setItem('role', role);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('role');
  }
}
