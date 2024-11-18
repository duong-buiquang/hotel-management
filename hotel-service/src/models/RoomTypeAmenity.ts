import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IRoomTypeAmenity extends Document {
  amenity_id: Types.ObjectId;
  room_type_id: Types.ObjectId;
}

const roomTypeAmenitiesSchema = new Schema<IRoomTypeAmenity>({
  amenity_id: { type: Schema.Types.ObjectId, ref: 'Amenity', required: true },
  room_type_id: { type: Schema.Types.ObjectId, ref: 'RoomType', required: true }
});

export default mongoose.model<IRoomTypeAmenity>(
  'RoomTypeAmenity',
  roomTypeAmenitiesSchema
);
