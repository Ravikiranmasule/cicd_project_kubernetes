import { Component, OnInit } from '@angular/core';
import { InventoryItemService} from '../inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryItem } from '../models/InventoryItem.model';

@Component({
  selector: 'app-inventoryitem-details',
  templateUrl: './inventoryitem-details.component.html',
  styleUrls: ['./inventoryitem-details.component.css']
})
export class InventoryitemDetailsComponent implements OnInit {
  item: InventoryItem | undefined;

  constructor(
    private inventoryItemService: InventoryItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.inventoryItemService.getInventoryItem(id).subscribe(data => {
      this.item = data;
    });
  }
  }

 


