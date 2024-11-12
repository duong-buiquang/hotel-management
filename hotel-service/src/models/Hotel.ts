import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IHotel extends Document {
  hotel_id: string;
  manager_id: string;
  name: string;
  description: string;
  address: string;
  created_at: Date;
}

const HotelSchema: Schema = new Schema({
  hotel_id: { type: String, default: uuidv4, unique: true },
  manager_id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IHotel>("Hotel", HotelSchema);
