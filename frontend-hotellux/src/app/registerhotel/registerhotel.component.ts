import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { HotelChain } from '../models/hotel-chain.model';
import { HotelBrand } from '../models/hotel-brand.model';
import { Hotel } from '../models/hotel.model';
import { HotelPayload } from '../models/HotelPayload.model';
import { HotelChainService } from '../hotelchain.service';
import { HotelBrandService } from '../hotelbrand.service';

@Component({
  selector: 'app-registerhotel',
  templateUrl: './registerhotel.component.html',
  styleUrls: ['./registerhotel.component.css']
})
export class RegisterhotelComponent implements OnInit {

 

  
 
  
 
  
    hotel: Hotel = {
      id: 0,
      name: '',
      address: '',
      starRating: 0,
      chain: {
        id: 0,
        name: '',
        headquarters: ''
      },
      brand: {
        id: 0,
        name: '',
        description: ''
      }
    };
    
    hotelChains: HotelChain[] = [];
    hotelBrands: HotelBrand[] = [];
  
  
  
    constructor(
      private hotelService: HotelService,
      private hotelChainService:HotelChainService,
      private hotelBrandService:HotelBrandService,
      private router: Router
    ) { }
  
    ngOnInit(): void {
      this.getAllHotelChains();
      this.getAllHotelBrands();
    }
  
    getAllHotelChains(): void {
      this.hotelChainService.getAllHotelChains().subscribe(chains => {
        this.hotelChains = chains;
      }, error => {
        console.error('Error fetching hotel chains', error);
      });
    }
  
    getAllHotelBrands(): void {
      this.hotelBrandService.getAllHotelBrands().subscribe(brands => {
        this.hotelBrands = brands;
      }, error => {
        console.error('Error fetching hotel brands', error);
      });
    }
  
    registerHotel(): void {
      if (this.isFormValid()) {
        const hotelPayload: HotelPayload= {
          name: this.hotel.name,
          address: this.hotel.address,
          chainId: this.hotel.chain.id,  // should match the name in HotelDTO
          brandId: this.hotel.brand.id,  // should match the name in HotelDTO
          rating: this.hotel.starRating
        };
    
        this.hotelService.registerHotel(hotelPayload).subscribe(() => {
         
          alert('Hotel registered successfully');
          this.router.navigate(['/manager-dashboard']);
        }, error => {
          console.error('Error registering hotel', error);
        });
      } else {
        alert('Please fill in all fields correctly');
      }
    }
  
    isFormValid(): boolean {
      return this.hotel.name.trim() !== '' &&
             this.hotel.address.trim() !== '' &&
             this.hotel.starRating > 0 &&
             this.hotel.chain.id > 0 &&
             this.hotel.brand.id > 0;
    }
  }
  

