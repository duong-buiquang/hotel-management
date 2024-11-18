import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface IAmenity extends Document {
  amenity_id: Types.ObjectId;
  name: string;
  description: string;
}

const amenitySchema = new Schema<IAmenity>({
  amenity_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true
  },
  name: { type: String, required: true },
  description: { type: String }
});

export default mongoose.model<IAmenity>('Amenity', amenitySchema);
