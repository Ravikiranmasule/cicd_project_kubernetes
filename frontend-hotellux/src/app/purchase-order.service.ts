// src/app/services/purchase-order.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PurchaseOrder } from './models/PurchaseOrder.model';
import { PurchaseOrderPayload } from './models/PurchaseOrderPayload.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllPurchaseOrders(): Observable<PurchaseOrder[]> {
    return this.http.get<PurchaseOrder[]>(this.configService.ordersEndpoint, {
      headers: this.getAuthHeaders()
    });
  }

  getPurchaseOrder(id: number): Observable<PurchaseOrder> {
    return this.http.get<PurchaseOrder>(`${this.configService.ordersEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createPurchaseOrder(payload: PurchaseOrderPayload): Observable<void> {
    return this.http.post<void>(this.configService.ordersEndpoint, payload, {
      headers: this.getAuthHeaders()
    });
  }

  updatePurchaseOrder(id: number, payload: PurchaseOrderPayload): Observable<void> {
    return this.http.put<void>(`${this.configService.ordersEndpoint}/${id}`, payload, {
      headers: this.getAuthHeaders()
    });
  }

  deletePurchaseOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.ordersEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
