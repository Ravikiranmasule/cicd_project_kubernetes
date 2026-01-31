import { Component, OnInit } from '@angular/core';
import { HotelChain } from '../models/hotel-chain.model';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelService } from '../hotel.service';
import { HotelChainService } from '../hotelchain.service';

@Component({
  selector: 'app-registerhotelchain',
  templateUrl: './registerhotelchain.component.html',
  styleUrls: ['./registerhotelchain.component.css']
})
export class RegisterhotelchainComponent implements OnInit {

  chain: HotelChain = { id: 0, name: '', headquarters: '' };
  isEditing = false;

  constructor(
    private hotelChainService: HotelChainService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const chainId = this.route.snapshot.paramMap.get('id');
    if (chainId) {
      this.isEditing = true;
      this.hotelChainService.getHotelChainById(+chainId).subscribe(chain => {
        this.chain = chain;
      }, error => {
        console.error('Error fetching hotel chain details', error);
      });
    }
  }

  saveChain(): void {
    if (this.chain) {
      if (this.isEditing) {
        this.hotelChainService.updateHotelChain(this.chain.id, this.chain).subscribe(() => {
          alert('Hotel chain updated successfully');
          this.router.navigate(['/hotel-chain']);
        }, error => {
          console.error('Error updating hotel chain', error);
        });
      } else {
        this.hotelChainService.createHotelChain(this.chain).subscribe(() => {
          alert('Hotel chain added successfully');
          this.router.navigate(['/hotel-chain']);
        }, error => {
          console.error('Error adding hotel chain', error);
        });
      }
    }
  }

  cancel(): void {
    this.router.navigate(['/hotel-chain']);
  }


}
