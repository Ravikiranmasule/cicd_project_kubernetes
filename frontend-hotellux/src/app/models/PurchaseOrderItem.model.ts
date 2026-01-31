import { InventoryItem } from "./InventoryItem.model";
import { PurchaseOrder } from "./PurchaseOrder.model";

export interface PurchaseOrderItem {
    id: number;
    purchaseOrder: PurchaseOrder; // Assuming purchaseOrder is a nested object
    inventoryItem: InventoryItem; // Assuming inventoryItem is a nested object
    quantity: number;
  }
  