import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IRoomPricing extends Document {
  room_type_id: Types.ObjectId;
  date: Date;
  price: number;
  created_at: Date;
}

const roomPricingSchema = new Schema<IRoomPricing>({
  room_type_id: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: true
  },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IRoomPricing>('RoomPricing', roomPricingSchema);
