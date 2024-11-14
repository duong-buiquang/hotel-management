// File: src/models/RoomPricing.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IRoomPricing extends Document {
  room_type_id: string; // Reference to RoomType
  date: Date;
  price: number;
}

const RoomPricingSchema: Schema = new Schema({
  room_type_id: { type: String, required: true, ref: 'RoomType' },
  date: { type: Date, required: true },
  price: { type: Number, required: true }
});

export default mongoose.model<IRoomPricing>('RoomPricing', RoomPricingSchema);
