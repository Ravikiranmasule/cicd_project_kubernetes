// hotel.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './models/hotel.model';
import { HotelChain } from './models/hotel-chain.model';
import { HotelBrand } from './models/hotel-brand.model';
import { HotelPayload } from './models/HotelPayload.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class HotelService { // Update with your backend URL

  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }
  getAllHotels(): Observable<Hotel[]> {
    const token = localStorage.getItem('authToken');
    return this.http.get<Hotel[]>(`${this.configService.hotelsEndPoint}/all`, {
      headers: this.getAuthHeaders()
    });
  }

  getHotelById(id: number): Observable<Hotel> {
    const token = localStorage.getItem('authToken');
    return this.http.get<Hotel>(`${this.configService.hotelsEndPoint}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  deleteHotel(id: number): Observable<void> {
    const token = localStorage.getItem('authToken');
    return this.http.delete<void>(`${this.configService.hotelsEndPoint}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  // hotel.service.ts
updateHotel(id: number, hotelPayload: HotelPayload): Observable<void> {
  const token = localStorage.getItem('authToken');
  return this.http.put<void>(`${this.configService.hotelsEndPoint}/${id}`, hotelPayload, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
  });
}


  // hotel.service.ts
registerHotel(hotelPayload: HotelPayload): Observable<void> {
  const token = localStorage.getItem('authToken');
  return this.http.post<void>(`${this.configService.hotelsEndPoint}/register`, hotelPayload, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
  });
}


//   getAllHotelChains(): Observable<HotelChain[]> {
//     const token = localStorage.getItem('authToken');
//     return this.http.get<HotelChain[]>(`${this.configService.hotelChainsEndpoint}/all`, {
//       headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//     });
//   }

//   getAllHotelBrands(): Observable<HotelBrand[]> {
//     const token = localStorage.getItem('authToken');
//     return this.http.get<HotelBrand[]>(`${this.configService.hotelBrandsEndpoint}/all`, {
//       headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//     });
//   }

//   // Hotel Chain Methods
// getHotelChainById(id: number): Observable<HotelChain> {
//   const token = localStorage.getItem('authToken');
//   return this.http.get<HotelChain>(`${this.configService.hotelChainsEndpoint}/${id}`, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }

// updateHotelChain(id: number, chain: HotelChain): Observable<void> {
//   const token = localStorage.getItem('authToken');
//   return this.http.put<void>(`${this.configService.hotelChainsEndpoint}/${id}`, chain, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }

// addHotelChain(chain: HotelChain): Observable<void> {
//   const token = localStorage.getItem('authToken');
//   return this.http.post<void>(`${this.configService.hotelChainsEndpoint}`, chain, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }

// deleteHotelChain(id: number): Observable<void> {
//   const token = localStorage.getItem('authToken');
//   return this.http.delete<void>(`${this.configService.hotelChainsEndpoint}/${id}`, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }
// // Hotel Brand Methods
// getHotelBrandById(id: number): Observable<HotelBrand> {
//   const token = localStorage.getItem('authToken');
//   return this.http.get<HotelBrand>(`${this.configService.hotelBrandsEndpoint}/${id}`, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }

// updateHotelBrand(id: number, brand: HotelBrand): Observable<void> {
//   const token = localStorage.getItem('authToken');
//   return this.http.put<void>(`${this.configService.hotelBrandsEndpoint}/${id}`, brand, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }
// addHotelBrand(brand: HotelBrand): Observable<void> {
//   const token = localStorage.getItem('authToken');
//   return this.http.post<void>(`${this.configService.hotelBrandsEndpoint}`, brand, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }

// deleteHotelBrand(id: number): Observable<void> {
//   const token = localStorage.getItem('authToken');
//   return this.http.delete<void>(`${this.configService.hotelBrandsEndpoint}/${id}`, {
//     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
//   });
// }

}
