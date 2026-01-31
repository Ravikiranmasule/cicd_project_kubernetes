// src/app/services/supplier.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supplier } from './models/Supplier.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.configService.suppliersEndpoint, {
      headers: this.getAuthHeaders()
    });
  }

  getSupplier(id: number): Observable<Supplier> {
    return this.http.get<Supplier>(`${this.configService.suppliersEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.post<Supplier>(this.configService.suppliersEndpoint, supplier, {
      headers: this.getAuthHeaders()
    });
  }

  updateSupplier(supplier: Supplier): Observable<Supplier> {
    return this.http.put<Supplier>(`${this.configService.suppliersEndpoint}/${supplier.id}`, supplier, {
      headers: this.getAuthHeaders()
    });
  }

  deleteSupplier(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.suppliersEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
