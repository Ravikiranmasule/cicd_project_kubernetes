import { Component, OnInit } from '@angular/core';
import { HotelPayload } from '../models/HotelPayload.model';
import { Hotel } from '../models/hotel.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { HotelBrandService } from '../hotelbrand.service';
import { HotelChain } from '../models/hotel-chain.model';
import { HotelBrand } from '../models/hotel-brand.model';
import { HotelChainService } from '../hotelchain.service';

@Component({
  selector: 'app-hoteledit',
  templateUrl: './hoteledit.component.html',
  styleUrls: ['./hoteledit.component.css']
})
export class HoteleditComponent implements OnInit {

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
  hotelPayload: HotelPayload = {
    name: '',
    address: '',
    chainId: 0,
    brandId: 0,
    rating: 0
  };
  
  constructor(
    private hotelService: HotelService,
    private hotelChainService:HotelChainService,
    private hotelBrandService:HotelBrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllHotelChains();
    this.getAllHotelBrands();
    const hotelId = +this.route.snapshot.paramMap.get('id')!;
    this.hotelService.getHotelById(hotelId).subscribe(hotel => {
      this.hotel = hotel;
    
    }, error => {
      console.error('Error fetching hotel details', error);
    });
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
  updateHotel(): void {
    if (this.hotel) {
      this.hotelPayload = {
        name: this.hotel.name,
        address: this.hotel.address,
        chainId: this.hotel.chain.id,
        brandId: this.hotel.brand.id,
        rating: this.hotel.starRating
      };
      const updatedHotel: HotelPayload = this.hotelPayload;

      this.hotelService.updateHotel(this.hotel.id, updatedHotel).subscribe(() => {
        alert('Hotel updated successfully');
        this.router.navigate(['/manager-dashboard']);
      }, error => {
        console.error('Error updating hotel', error);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/manager-dashboard']);
  }

}
