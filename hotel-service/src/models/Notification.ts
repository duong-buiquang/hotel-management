import mongoose, { Schema, model, Document, Types } from 'mongoose';

export interface INotification extends Document {
  notification_id: Types.ObjectId;
  user_id: Types.ObjectId;
  reservation_id: Types.ObjectId;
  message: string;
  is_read: boolean;
  created_at: Date;
}

const notificationSchema = new Schema<INotification>({
  notification_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true
  },
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  reservation_id: { type: Schema.Types.ObjectId, ref: 'Reservation' },
  message: { type: String },
  is_read: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model<INotification>(
  'Notification',
  notificationSchema
);
