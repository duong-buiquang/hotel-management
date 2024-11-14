// File: src/models/RoomInventory.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IRoomInventory extends Document {
  room_type_id: string; // Reference to RoomType
  date: Date;
  available_rooms: number;
}

const RoomInventorySchema: Schema = new Schema({
  room_type_id: { type: String, required: true, ref: 'RoomType' },
  date: { type: Date, required: true },
  available_rooms: { type: Number, required: true }
});

export default mongoose.model<IRoomInventory>(
  'RoomInventory',
  RoomInventorySchema
);
