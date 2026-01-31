import { Component, OnInit } from '@angular/core';
import { InventoryItemService} from '../inventory.service';
import { InventoryItem } from '../models/InventoryItem.model';

@Component({
  selector: 'app-inventoryitems',
  templateUrl: './inventoryitems.component.html',
  styleUrls: ['./inventoryitems.component.css']
})
export class InventoryitemsComponent implements OnInit {
  inventoryItems: InventoryItem[] = [];

  constructor(private inventoryItemService: InventoryItemService) { }

  ngOnInit(): void {
    this.inventoryItemService.getInventoryItems().subscribe(data => {
      this.inventoryItems = data;
    });
  }
  
}
