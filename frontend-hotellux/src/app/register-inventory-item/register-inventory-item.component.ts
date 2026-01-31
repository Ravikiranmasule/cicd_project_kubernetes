import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { InventoryItem } from '../models/InventoryItem.model';
import { InventoryItemService } from '../inventory.service';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../models/Supplier.model';
import { InventoryItemPayload } from '../models/InventoryItemPayload.model';

@Component({
  selector: 'app-register-inventory-item',
  templateUrl: './register-inventory-item.component.html',
  styleUrls: ['./register-inventory-item.component.css']
})
export class RegisterInventoryItemComponent {
  item: InventoryItemPayload = {
    itemName: '',
    quantity: 0,
    supplier_id: 0,  // Default value, will be updated on selection
    lastOrdered: new Date(),
    nextOrderDate: new Date(),
    unitPrice: 0,
    itemCategory: ''
  };
  suppliers: Supplier[] = [];

  constructor(
    private inventoryItemService: InventoryItemService,
    private supplierService: SupplierService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }

  register(): void {
    if (!this.item.supplier_id) {
      alert('Please select a supplier.');
      return;
    }

    this.inventoryItemService.createInventoryItem(this.item).subscribe(() => {
      this.router.navigate(['/inventory-item']);
    });
  }}
