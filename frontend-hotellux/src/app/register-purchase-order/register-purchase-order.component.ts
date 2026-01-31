import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrder } from '../models/PurchaseOrder.model';
import { PurchaseOrderService } from '../purchase-order.service';
import { InventoryItemService } from '../inventory.service';
import { InventoryItem } from '../models/InventoryItem.model';
import { PurchaseOrderPayload } from '../models/PurchaseOrderPayload.model';

@Component({
  selector: 'app-register-purchase-order',
  templateUrl: './register-purchase-order.component.html',
  styleUrls: ['./register-purchase-order.component.css']
})
export class RegisterPurchaseOrderComponent {
  purchaseOrder: PurchaseOrderPayload = {
    itemIds: [],
    orderDate: new Date(),
    status: ''
  };
  inventoryItems: InventoryItem[] = [];

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize inventory items if needed
    // this.loadInventoryItems();
  }

  register(): void {
    this.purchaseOrderService.createPurchaseOrder(this.purchaseOrder).subscribe(() => {
      this.router.navigate(['/purchase-order']); // Redirect after registration
    });
  }
}
