import { Component, OnInit } from '@angular/core';
import { InventoryItemService } from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryItem } from '../models/InventoryItem.model';
import { InventoryItemPayload } from '../models/InventoryItemPayload.model';
import { SupplierService } from '../supplier.service';
import { Supplier } from '../models/Supplier.model';

@Component({
  selector: 'app-inventoryitem-edit',
  templateUrl: './inventoryitem-edit.component.html',
  styleUrls: ['./inventoryitem-edit.component.css']
})
export class InventoryitemEditComponent implements OnInit {
  item: InventoryItemPayload = {
    itemName: '',
    quantity: 0,
    supplier_id: 0,
    nextOrderDate: new Date(),
    unitPrice: 0,
    itemCategory: ''
  };
  suppliers: Supplier[] = [];

  constructor(
    private inventoryItemService: InventoryItemService,
    private supplierService: SupplierService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.inventoryItemService.getInventoryItem(id).subscribe(data => {
      this.item = {
        itemName: data.itemName,
        quantity: data.quantity,
        supplier_id: data.supplier.id,
        lastOrdered: data.lastOrdered,
        nextOrderDate: data.nextOrderDate,
        unitPrice: data.unitPrice,
        itemCategory: data.itemCategory
      };
    });

    this.supplierService.getSuppliers().subscribe(data => {
      this.suppliers = data;
    });
  }

  update(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.inventoryItemService.updateInventoryItem(this.item, id).subscribe(() => {
      this.router.navigate(['/inventory-items']);
    });
  }
}
