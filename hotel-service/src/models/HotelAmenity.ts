import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IHotelAmenity extends Document {
  amenity_id: Types.ObjectId;
  hotel_id: Types.ObjectId;
}

const hotelAmenitiesSchema = new Schema<IHotelAmenity>({
  amenity_id: { type: Schema.Types.ObjectId, ref: 'Amenity', required: true },
  hotel_id: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true }
});

export default mongoose.model<IHotelAmenity>(
  'HotelAmenity',
  hotelAmenitiesSchema
);
