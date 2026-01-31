import { Component, OnInit } from '@angular/core';
import { HotelChain } from '../models/hotel-chain.model';
import { HotelService } from '../hotel.service';
import { HotelChainService } from '../hotelchain.service';

@Component({
  selector: 'app-hotelchain',
  templateUrl: './hotelchain.component.html',
  styleUrls: ['./hotelchain.component.css']
})
export class HotelchainComponent implements OnInit {

  hotelChains: HotelChain[] = [];

  constructor(private hotelService: HotelService,private hotelChainService:HotelChainService) { }

  ngOnInit(): void {
    this.getAllHotelChains();
  }

  getAllHotelChains(): void {
    this.hotelChainService.getAllHotelChains().subscribe(hotelChains => {
      this.hotelChains = hotelChains;
    }, error => {
      console.error('Error fetching hotel chains', error);
    });
  }

  deleteChain(id: number): void {
    if (confirm('Are you sure you want to delete this chain?')) {
      this.hotelChainService.deleteHotelChain(id).subscribe(() => {
        alert('Hotel chain deleted');
        this.getAllHotelChains();
      }, error => {
        console.error('Error deleting hotel chain', error);
      });
    }
  }

}
