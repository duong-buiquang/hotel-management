import mongoose, { Schema, Document } from "mongoose";

interface IRoomPricing extends Document {
  room_type_id: string;
  date: Date;
  price: number;
  created_at: Date;
}

const RoomPricingSchema: Schema = new Schema({
  room_type_id: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IRoomPricing>("RoomPricing", RoomPricingSchema);
