// File: src/models/Room.ts
import mongoose, { Schema, Document } from 'mongoose';

interface IRoom extends Document {
  room_id: number;
  hotel_id: number; // Reference to the hotel
  room_type_id: string; // Reference to RoomType
  room_number: string;
  ratings: {
    user_id: string;
    value: number;
    comment?: string;
    created_at: Date;
  }[];
  comments: {
    user_id: string;
    comment: string;
    created_at: Date;
  }[];
}

const RoomSchema: Schema = new Schema({
  room_id: { type: Number, unique: true },
  hotel_id: { type: Number, required: true, ref: 'Hotel' },
  room_type_id: { type: String, required: true, ref: 'RoomType' },
  room_number: { type: String, required: true },
  ratings: {
    type: [
      {
        user_id: { type: String, required: true },
        value: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String },
        created_at: { type: Date, default: Date.now }
      }
    ],
    default: []
  },
  comments: {
    type: [
      {
        user_id: { type: String, required: true },
        comment: { type: String, required: true },
        created_at: { type: Date, default: Date.now }
      }
    ],
    default: []
  }
});

export default mongoose.model<IRoom>('Room', RoomSchema);
