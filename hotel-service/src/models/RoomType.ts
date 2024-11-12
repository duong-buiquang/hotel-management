import mongoose, { Schema, Document } from "mongoose";

interface IRoomType extends Document {
  room_type_id: string;
  hotel_id: string;
  name: string;
  description: string;
  num_beds: number;
  bed_type: string;
  max_occupancy: number;
  base_price: number;
}

const RoomTypeSchema: Schema = new Schema({
  room_type_id: { type: String, required: true, unique: true },
  hotel_id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  num_beds: { type: Number, required: true },
  bed_type: { type: String, required: true },
  max_occupancy: { type: Number, required: true },
  base_price: { type: Number, required: true },
});

export default mongoose.model<IRoomType>("RoomType", RoomTypeSchema);
