import { Component, OnInit } from '@angular/core';
import { PurchaseOrder } from '../models/PurchaseOrder.model';
import { InventoryItemService } from '../inventory.service';
import { PurchaseOrderService } from '../purchase-order.service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  purchaseOrders: PurchaseOrder[] = [];

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.loadPurchaseOrders();
  }

  loadPurchaseOrders(): void {
    this.purchaseOrderService.getAllPurchaseOrders().subscribe(data => {
      this.purchaseOrders = data;
    });
  }

  
  }

