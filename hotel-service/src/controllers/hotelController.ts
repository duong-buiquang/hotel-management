// File: src/controllers/hotelController.ts
import { Request, Response } from 'express';
import Hotel from '../models/Hotel';
import { uploadToCloudinary } from '../objectStorage'; // Assuming you have a Cloudinary upload function
import fs from 'fs';

export const addHotel = async (req: Request, res: Response): Promise<any> => {
  try {
    console.log('file: ', req.files);
    const { manager_id, name, description, address } = req.body;

    // Basic validation for required fields
    if (!manager_id || !name || !description || !address) {
      return res.status(400).json({
        error:
          'All fields (hotel_id, manager_id, name, description, address) are required'
      });
    }

    // Check if files are uploaded
    if (!req.files || !Array.isArray(req.files)) {
      return res
        .status(400)
        .json({ error: 'At least one image file is required' });
    }

    // Validate and upload each file
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    const imageUrls: string[] = [];

    for (const file of req.files) {
      if (!allowedMimeTypes.includes(file.mimetype)) {
        // Delete the uploaded file if it doesn't have a valid MIME type
        fs.unlinkSync(file.path);
        return res.status(400).json({
          error: 'Invalid file type. Only JPEG and PNG images are allowed'
        });
      }

      // Upload image to Cloudinary and collect the URL
      const imageUrl = await uploadToCloudinary(file.path);
      imageUrls.push(imageUrl);

      // Clean up local file after upload
      // if (fs.existsSync(file.path)) {
      //   await fs.promises.unlink(file.path); // Use async version to maintain order
      // } else {
      //   console.warn(`File ${file.path} not found, skipping deletion.`);
      // }
    }

    // Create a new hotel entry
    const newHotel = new Hotel({
      manager_id,
      name,
      description,
      address,
      images: imageUrls // Save the array of image URLs
    });

    await newHotel.save();
    res
      .status(201)
      .json({ message: 'Hotel added successfully', hotel: newHotel });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const showHotels = async (req: Request, res: Response): Promise<any> => {
  const hotels = await Hotel.find();
  res.status(201).json({ hotels });
};
