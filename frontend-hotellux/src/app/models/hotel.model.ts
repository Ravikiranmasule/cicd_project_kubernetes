// hotel.model.ts
export interface Hotel {
  id: number;
  name: string;
  address: string;
  starRating: number;
  chain: {
      id: number;
      name: string;
      headquarters: string;
  };
  brand: {
      id: number;
      name: string;
      description: string;
  };
}
