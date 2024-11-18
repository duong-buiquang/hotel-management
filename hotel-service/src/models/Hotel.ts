// File: src/models/Hotel.ts
import mongoose, { Schema, Document, Types } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
interface IHotel extends Document {
  manager_id: Types.ObjectId;
  name: string;
  description: string;
  address: string;
  images: string[]; // Array of image URLs
  created_at: Date;
}

const HotelSchema: Schema = new Schema({
  manager_id: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, required: true },
  description: { type: String, required: true },
  address: { type: String, required: true },
  images: { type: [String], default: [] }, // Array of image URLs
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IHotel>('Hotel', HotelSchema);
