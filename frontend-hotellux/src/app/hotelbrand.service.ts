// hotel-brand.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelBrand } from './models/hotel-brand.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HotelBrandService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllHotelBrands(): Observable<HotelBrand[]> {
    return this.http.get<HotelBrand[]>(`${this.configService.hotelBrandsEndpoint}/all`, {
      headers: this.getAuthHeaders()
    });
  }

  getHotelBrandById(id: number): Observable<HotelBrand> {
    return this.http.get<HotelBrand>(`${this.configService.hotelBrandsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createHotelBrand(hotelBrand: HotelBrand): Observable<HotelBrand> {
    return this.http.post<HotelBrand>(`${this.configService.hotelBrandsEndpoint}`, hotelBrand, {
      headers: this.getAuthHeaders()
    });
  }

  updateHotelBrand(id: number, hotelBrand: HotelBrand): Observable<HotelBrand> {
    return this.http.put<HotelBrand>(`${this.configService.hotelBrandsEndpoint}/${id}`, hotelBrand, {
      headers: this.getAuthHeaders()
    });
  }

  deleteHotelBrand(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.hotelBrandsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}