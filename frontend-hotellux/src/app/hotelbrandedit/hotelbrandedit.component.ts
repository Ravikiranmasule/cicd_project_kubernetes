import { Component, OnInit } from '@angular/core';
import { HotelBrand } from '../models/hotel-brand.model';
import { HotelService } from '../hotel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HotelBrandService } from '../hotelbrand.service';

@Component({
  selector: 'app-hotelbrandedit',
  templateUrl: './hotelbrandedit.component.html',
  styleUrls: ['./hotelbrandedit.component.css']
})
export class HotelbrandeditComponent implements OnInit {
  brand: HotelBrand = { id: 0, name: '', description: '' }; // Initialize with default values
  isEditing = false;

  constructor(
    private hotelService: HotelService,
    private hotelBrandService:HotelBrandService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const brandId = this.route.snapshot.paramMap.get('id');
    if (brandId) {
      this.isEditing = true;
      this.hotelBrandService.getHotelBrandById(+brandId).subscribe(brand => {
        this.brand = brand;
      }, error => {
        console.error('Error fetching hotel brand details', error);
      });
    }
  }

  saveBrand(): void {
    if (this.isEditing) {
      this.hotelBrandService.updateHotelBrand(this.brand.id, this.brand).subscribe(() => {
        alert('Hotel brand updated successfully');
        this.router.navigate(['/hotel-brand']);
      }, error => {
        console.error('Error updating hotel brand', error);
      });
    } else {
      this.hotelBrandService.createHotelBrand(this.brand).subscribe(() => {
        alert('Hotel brand added successfully');
        this.router.navigate(['/hotel-brand']);
      }, error => {
        console.error('Error adding hotel brand', error);
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/hotel-brand']);
  }

  

}
