import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IRoomInventory extends Document {
  room_type_id: Types.ObjectId;
  date: Date;
  available_rooms: number;
  created_at: Date;
}

const roomInventorySchema = new Schema<IRoomInventory>({
  room_type_id: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: true
  },
  date: { type: Date, required: true },
  available_rooms: { type: Number, required: true },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<IRoomInventory>(
  'RoomInventory',
  roomInventorySchema
);
