// File: src/models/User.ts
import mongoose, { Schema, Document, Types } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
  user_id: Types.ObjectId;
  user_type?: 'manager' | 'customer';
  phoneNumber: string;
  password: string;
  age?: number;
  hobbies?: string[];
  comparePassword: (password: string) => Promise<boolean>;
}

const UserSchema: Schema<IUser> = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
    unique: true
  },
  user_type: { type: String, enum: ['manager', 'customer'] },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  hobbies: { type: [String] }
});

// Use function keyword and explicitly type `this` as `IUser`
UserSchema.pre<IUser>('save', async function (next) {
  // Check if the password is modified before hashing
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare passwords
UserSchema.methods.comparePassword = function (
  password: string
): Promise<boolean> {
  return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);
