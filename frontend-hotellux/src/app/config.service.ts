// src/app/services/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

  loadConfig(): Promise<void> {
    return this.http.get('/assets/config.json')
      .toPromise()
      .then((config) => {
        this.config = config;
      });
  }

  get apiUrl(): string {
    return this.config.apiBaseUrl;
  }

  get usersEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.users}`;
  }

  get staffEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.staff}`;
  }

  get suppliersEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.suppliers}`;
  }

  get roomsEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.rooms}`;
  }

  get ordersEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.orders}`;
  }

  get maintenanceEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.maintenance}`;
  }

  get inventoryItemsEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.inventoryItems}`;
  }

  // New endpoints
  get hotelChainsEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.hotelChains}`;
  }

  get hotelBrandsEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.hotelBrands}`;
  }

  get hotelsEndPoint():string {
    return `${this.apiUrl}${this.config.endpoints.hotel}`;
 }

  get crmEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.crm}`;
  }

  get bookingsEndpoint(): string {
    return `${this.apiUrl}${this.config.endpoints.bookings}`;
  }
}