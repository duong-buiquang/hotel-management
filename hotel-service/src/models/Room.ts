import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IRoom extends Document {
  room_id: Types.ObjectId;
  room_type_id: Types.ObjectId;
  room_number: string;
}

const roomSchema = new Schema<IRoom>({
  room_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true
  },
  room_type_id: {
    type: Schema.Types.ObjectId,
    ref: 'RoomType',
    required: true
  },
  room_number: { type: String, required: true }
});

export default mongoose.model<IRoom>('Room', roomSchema);
