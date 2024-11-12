import mongoose, { Schema, Document } from "mongoose";

interface IRoom extends Document {
  room_id: string;
  room_type_id: string;
  room_number: string;
}

const RoomSchema: Schema = new Schema({
  room_id: { type: String, required: true, unique: true },
  room_type_id: { type: String, required: true },
  room_number: { type: String, required: true },
});

export default mongoose.model<IRoom>("Room", RoomSchema);
