import { Component, OnInit } from '@angular/core';
import { Supplier } from '../models/Supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  suppliers: Supplier[] = [];
  selectedSupplier: Supplier | null = null;





  constructor(private supplierService: SupplierService) { }

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }
}
