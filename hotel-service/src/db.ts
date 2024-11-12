import mongoose, { ConnectOptions } from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://localhost:27017/hotelManagement",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
