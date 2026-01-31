import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from '../models/Supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.css']
})
export class SupplierEditComponent implements OnInit {
  supplier: Supplier = {
    id: 0,
    name: '',
    contactInfo: '',
    address: ''
  };

  constructor(
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.supplierService.getSupplier(id).subscribe(data => {
      this.supplier = data;
    });
  }

  update(): void {
    this.supplierService.updateSupplier(this.supplier).subscribe(() => {
      this.router.navigate(['/suppliers']);
    });
  }
  
}
