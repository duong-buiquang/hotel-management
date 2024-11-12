import mongoose, { Schema, Document } from "mongoose";

interface IRoomInventory extends Document {
  room_type_id: string;
  date: Date;
  available_rooms: number;
  created_at: Date;
}

const RoomInventorySchema: Schema = new Schema({
  room_type_id: { type: String, required: true },
  date: { type: Date, required: true },
  available_rooms: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model<IRoomInventory>(
  "RoomInventory",
  RoomInventorySchema
);
