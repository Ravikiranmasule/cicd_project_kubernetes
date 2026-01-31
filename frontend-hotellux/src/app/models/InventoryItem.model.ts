import { Supplier } from "./Supplier.model";

  export interface InventoryItem {
    id: number;
    itemName: string;
    quantity: number;
    supplier: Supplier; // Assuming `supplier` is a nested object
    lastOrdered: Date; // Optional fields
    nextOrderDate: Date;
    unitPrice: number;
    itemCategory: string;
  }
  