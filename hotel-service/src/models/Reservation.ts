import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IReservation extends Document {
  reservation_id: Types.ObjectId;
  user_id: Types.ObjectId;
  hotel_id: Types.ObjectId;
  // room_type_id: Types.ObjectId;
  check_in_date: Date;
  check_out_date: Date;
  total_price: number;
  status: 'confirmed' | 'pending' | 'cancelled';
  created_at: Date;
}

const reservationSchema = new Schema<IReservation>({
  reservation_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true,
    alias: 'reservationId'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    alias: 'userId'
  },
  hotel_id: {
    type: Schema.Types.ObjectId,
    ref: 'Hotel',
    required: true,
    alias: 'hotelId'
  },
  // room_type_id: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'RoomType',
  //   required: true
  // },
  check_in_date: { type: Date, required: true, alias: 'checkInDate' },
  check_out_date: { type: Date, required: true, alias: 'checkOutDate' },
  total_price: { type: Number, required: true, alias: 'totalPrice' },
  status: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'pending'
  },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IReservation>('Reservation', reservationSchema);
