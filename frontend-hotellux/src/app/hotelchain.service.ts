// hotel-chain.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HotelChain } from './models/hotel-chain.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HotelChainService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllHotelChains(): Observable<HotelChain[]> {
   
    return this.http.get<HotelChain[]>(`${this.configService.hotelChainsEndpoint}/all`, {
      headers: this.getAuthHeaders()
    });
  }

  getHotelChainById(id: number): Observable<HotelChain> {
    return this.http.get<HotelChain>(`${this.configService.hotelChainsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createHotelChain(hotelChain: HotelChain): Observable<HotelChain> {
    return this.http.post<HotelChain>(`${this.configService.hotelChainsEndpoint}`, hotelChain, {
      headers: this.getAuthHeaders()
    });
  }

  updateHotelChain(id: number, hotelChain: HotelChain): Observable<HotelChain> {
    return this.http.put<HotelChain>(`${this.configService.hotelChainsEndpoint}/${id}`, hotelChain, {
      headers: this.getAuthHeaders()
    });
  }

  deleteHotelChain(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.hotelChainsEndpoint}/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}