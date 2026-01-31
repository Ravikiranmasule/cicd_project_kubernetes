import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Supplier } from '../models/Supplier.model';
import { SupplierService } from '../supplier.service';

@Component({
  selector: 'app-register-supplier',
  templateUrl: './register-supplier.component.html',
  styleUrls: ['./register-supplier.component.css']
})
export class RegisterSupplierComponent {
  supplier: Supplier = {
    id: 0,
    name: '',
    contactInfo: '',
    address: ''
  };

  constructor(private supplierService: SupplierService, private router: Router) { }

  register(): void {
    this.supplierService.createSupplier(this.supplier).subscribe(() => {
      this.router.navigate(['/supplier']);
    });
  }
}
