import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IReservation extends Document {
  reservation_id: Types.ObjectId;
  user_id: Types.ObjectId;
  hotel_id: Types.ObjectId;
  room_type_id: Types.ObjectId;
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
    unique: true
  },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  hotel_id: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  room_type_id: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: true
  },
  check_in_date: { type: Date, required: true },
  check_out_date: { type: Date, required: true },
  total_price: { type: Number, required: true },
  status: {
    type: String,
    enum: ['confirmed', 'pending', 'cancelled'],
    default: 'pending'
  },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IReservation>('Reservation', reservationSchema);
