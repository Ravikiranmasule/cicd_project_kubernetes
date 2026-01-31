import { InventoryItem } from "./InventoryItem.model";

export interface PurchaseOrder {
  id: number;
  items: InventoryItem[]; // List of inventory items in the order
  orderDate: Date;
  deliveryDate?: Date; // Optional
  status: string; // e.g., Pending, Completed
}
