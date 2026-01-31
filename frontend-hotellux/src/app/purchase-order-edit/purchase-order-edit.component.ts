import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrder } from '../models/PurchaseOrder.model';
import { PurchaseOrderPayload } from '../models/PurchaseOrderPayload.model';
import { PurchaseOrderService } from '../purchase-order.service';
import { InventoryItem } from '../models/InventoryItem.model';

@Component({
  selector: 'app-purchase-order-edit',
  templateUrl: './purchase-order-edit.component.html',
  styleUrls: ['./purchase-order-edit.component.css']
})
export class PurchaseOrderEditComponent implements OnInit {
  purchaseOrder: PurchaseOrder | null = null;
  inventoryItems: InventoryItem[] = [];
  id: number | null = null;

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    if (this.id) {
      this.purchaseOrderService.getPurchaseOrder(this.id).subscribe(data => {
        this.purchaseOrder = data;
        // If you need to initialize inventoryItems, you should load them here.
        // this.loadInventoryItems();
      });
    }
  }

  save(): void {
    if (this.purchaseOrder && this.id !== null) {
      const payload: PurchaseOrderPayload = {
        itemIds: this.purchaseOrder.items.map(item => item.id),
        orderDate: this.purchaseOrder.orderDate,
        deliveryDate: this.purchaseOrder.deliveryDate,
        status: this.purchaseOrder.status
      };
      this.purchaseOrderService.updatePurchaseOrder(this.id, payload).subscribe(() => {
        this.router.navigate(['/purchase-orders']); // Redirect after save
      });
    }
  }
 

  

}
