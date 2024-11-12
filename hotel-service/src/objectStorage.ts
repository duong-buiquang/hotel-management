// File: src/objectStorage.ts
import { v2 as cloudinary } from "cloudinary";
import path from "path";
import fs from "fs";
import * as dotenv from "dotenv";

dotenv.config();
console.log(process.env.CLOUDINARY_CLOUD_NAME);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (filePath: string): Promise<string> => {
  try {
    // Upload the file to Cloudinary
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "hotel_images", // Optional: Specify a folder for uploads
    });

    // Clean up local file after upload
    fs.unlinkSync(filePath);
    console.log(result.secure_url);
    return result.secure_url; // Return the Cloudinary URL
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    throw new Error("Failed to upload to Cloudinary");
  }
};
