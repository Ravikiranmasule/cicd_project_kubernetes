// purchase-order-payload.model.ts
export interface PurchaseOrderPayload {
    orderDate: Date;
    deliveryDate?: Date; // Optional
    status: string;
    itemIds: number[]; // List of inventory item IDs
  }
  