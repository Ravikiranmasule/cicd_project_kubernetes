export interface InventoryItemPayload {
    itemName: string;
    quantity: number;
    supplier_id: number; // Foreign key to Supplier
    lastOrdered?: Date;
    nextOrderDate: Date;
    unitPrice: number;
    itemCategory: string;
  }