// src/app/services/staff.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Staff } from './models/Staff.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllStaff(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.configService.staffEndpoint, {
      headers: this.getAuthHeaders()
    });
  }

  getStaffById(id: number): Observable<Staff> {
    return this.http.get<Staff>(`${this.configService.staffEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createStaff(staff: Staff): Observable<Staff> {
    return this.http.post<Staff>(this.configService.staffEndpoint, staff, {
      headers: this.getAuthHeaders()
    });
  }

  updateStaff(id: number, staff: Staff): Observable<Staff> {
    return this.http.put<Staff>(`${this.configService.staffEndpoint}/${id}`, staff, {
      headers: this.getAuthHeaders()
    });
  }

  deleteStaff(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.staffEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
