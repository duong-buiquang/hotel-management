import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IRoomType extends Document {
  room_type_id: Types.ObjectId;
  hotel_id: Types.ObjectId;
  name: string;
  description: string;
  num_beds: number;
  bed_type: string;
  max_occupancy: number;
  base_price: number;
}

const roomTypeSchema = new Schema<IRoomType>({
  room_type_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true
  },
  hotel_id: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
  name: { type: String, required: true },
  description: { type: String },
  num_beds: { type: Number },
  bed_type: { type: String },
  max_occupancy: { type: Number },
  base_price: { type: Number }
});

export default mongoose.model<IRoomType>('RoomType', roomTypeSchema);
