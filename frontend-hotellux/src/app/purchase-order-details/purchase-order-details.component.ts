import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrder } from '../models/PurchaseOrder.model';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-purchase-order-details',
  templateUrl: './purchase-order-details.component.html',
  styleUrls: ['./purchase-order-details.component.css']
})
export class PurchaseOrderDetailsComponent implements OnInit {
  purchaseOrder: PurchaseOrder | null = null;

  constructor(
    private purchaseOrderService: PurchaseOrderService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.purchaseOrderService.getPurchaseOrder(id).subscribe(data => {
        this.purchaseOrder = data;
      });
    }
  }
  
}
