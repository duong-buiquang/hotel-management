import { Request, Response } from "express";
import Hotel from "../models/Hotel";
import { uploadToCloudinary } from "../objectStorage";
import fs from "fs";

const ALLOWED_MIME_TYPES = ["image/jpeg", "image/png", "image/jpg"];

export const addHotel = async (req: Request, res: Response): Promise<any> => {
  try {
    // Extract required fields from the request body
    const { manager_id, name, description, address } = req.body;

    // Basic validation for required fields
    if (manager_id || !name || !description || !address) {
      return res.status(400).json({
        error:
          "All fields (manager_id, name, description, address) are required",
      });
    }

    // Check if a file is uploaded
    if (!req.file) {
      return res.status(400).json({ error: "Image file is required" });
    }

    // Validate MIME type of the uploaded file
    if (!ALLOWED_MIME_TYPES.includes(req.file.mimetype)) {
      // Delete the uploaded file if it doesn't have a valid MIME type
      fs.unlinkSync(req.file.path);
      return res.status(400).json({
        error: "Invalid file type. Only JPEG and PNG images are allowed",
      });
    }

    // Upload image to Cloudinary
    const imageUrl = await uploadToCloudinary(req.file.path);

    // Create a new hotel entry
    const newHotel = new Hotel({
      manager_id,
      name,
      description,
      address,
      imageUrl,
    });
    await newHotel.save();

    res
      .status(201)
      .json({ message: "Hotel added successfully", hotel: newHotel });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
