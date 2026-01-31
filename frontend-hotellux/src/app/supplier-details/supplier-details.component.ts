import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../models/Supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-details',
  templateUrl: './supplier-details.component.html',
  styleUrls: ['./supplier-details.component.css']
})
export class SupplierDetailsComponent implements OnInit {

  supplier: Supplier | undefined;

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.supplierService.getSupplier(id).subscribe(data => {
      this.supplier = data;
    });
  }
}
