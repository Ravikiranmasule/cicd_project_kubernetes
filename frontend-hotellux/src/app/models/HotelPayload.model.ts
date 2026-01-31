// hotel.model.ts
export interface HotelPayload {
  name: string;
  address: string;
  chainId: number;  // should be number to match Java Long
  brandId: number;  // should be number to match Java Long
  rating: number;
}
