// src/app/services/inventory-item.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InventoryItem } from './models/InventoryItem.model';
import { InventoryItemPayload } from './models/InventoryItemPayload.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class InventoryItemService {

  constructor(private http: HttpClient, private configService: ConfigService) { }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getInventoryItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.configService.inventoryItemsEndpoint, { headers: this.getAuthHeaders() });
  }

  getInventoryItem(id: number): Observable<InventoryItem> {
    return this.http.get<InventoryItem>(`${this.configService.inventoryItemsEndpoint}/${id}`, { headers: this.getAuthHeaders() });
  }

  createInventoryItem(item: InventoryItemPayload): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.configService.inventoryItemsEndpoint, item, { headers: this.getAuthHeaders() });
  }

  updateInventoryItem(item: InventoryItemPayload, id: number): Observable<InventoryItem> {
    return this.http.put<InventoryItem>(`${this.configService.inventoryItemsEndpoint}/${id}`, item, { headers: this.getAuthHeaders() });
  }

  deleteInventoryItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.inventoryItemsEndpoint}/${id}`, { headers: this.getAuthHeaders() });
  }
}
