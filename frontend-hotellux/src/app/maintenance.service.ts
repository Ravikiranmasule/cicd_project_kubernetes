// src/app/services/maintenance.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MaintenanceRequest } from './models/MaintenanceRequest.model';
import { ConfigService } from './config.service';
import { MaintenanceRequestPayload } from './models/MaintenanceRequestPayload.model';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getHeaders(): HttpHeaders {
    const authToken = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Authorization': `Bearer ${authToken}`
    });
  }

  getAllRequests(): Observable<MaintenanceRequest[]> {
    return this.http.get<MaintenanceRequest[]>(this.configService.maintenanceEndpoint, { headers: this.getHeaders() });
  }

  getRequestById(id: number): Observable<MaintenanceRequest> {
    return this.http.get<MaintenanceRequest>(`${this.configService.maintenanceEndpoint}/${id}`, { headers: this.getHeaders() });
  }

  createRequest(request: MaintenanceRequestPayload): Observable<MaintenanceRequest> {
    return this.http.post<MaintenanceRequest>(this.configService.maintenanceEndpoint, request, { headers: this.getHeaders() });
  }

  updateRequest(id: number, request: MaintenanceRequest): Observable<MaintenanceRequest> {
    return this.http.put<MaintenanceRequest>(`${this.configService.maintenanceEndpoint}/${id}`, request, { headers: this.getHeaders() });
  }

  deleteRequest(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.maintenanceEndpoint}/${id}`, { headers: this.getHeaders() });
  }

  getRequestsByRoom(roomId: number): Observable<MaintenanceRequest[]> {
    return this.http.get<MaintenanceRequest[]>(`${this.configService.maintenanceEndpoint}/room/${roomId}`, { headers: this.getHeaders() });
  }

  getRequestsByTechnician(technicianId: number): Observable<MaintenanceRequest[]> {
    return this.http.get<MaintenanceRequest[]>(`${this.configService.maintenanceEndpoint}/technician/${technicianId}`, { headers: this.getHeaders() });
  }

  getRequestStatuses(): Observable<string[]> {
    return this.http.get<string[]>(`${this.configService.maintenanceEndpoint}/request-status`, { headers: this.getHeaders() });
  }
}
