export interface Booking {
  id: number;
  room: {
    id: number; // Assuming you want to include room ID directly
  };
  checkInDate: Date;
  checkOutDate: Date;
  guestName: string;
  specialRequests?: string;
  totalPrice?: number;
  bookingStatus?: string;
  bookingDate?: Date;
  numberOfGuests?: number;
  paymentMethod?: string;
  confirmationNumber?: string;
}
