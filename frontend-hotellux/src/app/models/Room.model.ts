// src/app/models/Room.model.ts
export interface Room {
  id: number;
  name: string;
  category: string;
  amenities: string;
  price: number;
  description?: string;
  capacity?: number;
  bedType?: string;
  isAvailable?: boolean;
  rating?: number;
  view?: string;
}
