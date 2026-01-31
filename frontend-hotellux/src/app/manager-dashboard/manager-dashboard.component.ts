// manager-dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { Hotel } from '../models/hotel.model';
import { HotelChain } from '../models/hotel-chain.model';
import { HotelBrand } from '../models/hotel-brand.model';
import { AuthService } from '../auth.service';
import { HotelChainService } from '../hotelchain.service';
import { HotelBrandService } from '../hotelbrand.service';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  hotels: Hotel[] = [];
  hotelChains: HotelChain[] = [];
  hotelBrands: HotelBrand[] = [];

  constructor(
    private hotelService: HotelService,
    private hotelChainService:HotelChainService,
    private hotelBrandService:HotelBrandService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllHotels();
    // this.getAllHotelChains();
    // this.getAllHotelBrands();
  }

  getAllHotels(): void {
    this.hotelService.getAllHotels().subscribe(hotels => {
      this.hotels = hotels;
    }, error => {
      console.error('Error fetching hotels', error);
    });
  }

  getAllHotelChains(): void {
    this.hotelChainService.getAllHotelChains().subscribe(hotelChains => {
      this.hotelChains = hotelChains;
    }, error => {
      console.error('Error fetching hotel chains', error);
    });
  }

  getAllHotelBrands(): void {
    this.hotelBrandService.getAllHotelBrands().subscribe(hotelBrands => {
      this.hotelBrands = hotelBrands;
    }, error => {
      console.error('Error fetching hotel brands', error);
    });
  }

  deleteHotel(hotelId: number): void {
    if (confirm('Are you sure you want to delete this hotel?')) {
      this.hotelService.deleteHotel(hotelId).subscribe(() => {
        alert('Hotel deleted');
        this.getAllHotels();
      }, error => {
        console.error('Error deleting hotel', error);
      });
    }
  }
  viewHotel(hotelId: number): void {
    this.router.navigate(['/hotel-details', hotelId]);
  }
  editHotel(hotelId: number): void {
    this.router.navigate(['/hotel-edit', hotelId]);
  }

 

  getChainName(chainId: number): string {
    const chain = this.hotelChains.find(chain => chain.id === chainId);
    if (!chain) {
      console.warn(`Chain ID ${chainId} not found`);
    }
    return chain ? chain.name : 'Unknown';
  }
  
  getBrandName(brandId: number): string {
    const brand = this.hotelBrands.find(brand => brand.id === brandId);
    if (!brand) {
      console.warn(`Brand ID ${brandId} not found`);
    }
    return brand ? brand.name : 'Unknown';
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
