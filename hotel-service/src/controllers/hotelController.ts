// File: src/controllers/hotelController.ts
import { Request, Response } from 'express';
import Hotel from '../models/Hotel';
import { uploadToCloudinary } from '../objectStorage'; // Assuming you have a Cloudinary upload function
import fs from 'fs';
import RoomType from '../models/RoomType';
import Amenity from '../models/Amenity';
import HotelAmenity from '../models/HotelAmenity';
import RoomTypeAmenity from '../models/RoomTypeAmenity';

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

export const hotelDetailById = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { hotelId } = req.params;

    // Fetch hotel details
    const hotel = await Hotel.findById(hotelId).populate('manager_id');
    if (!hotel) {
      return res.status(404).json({ message: 'Hotel not found' });
    }

    // Fetch related room types for the hotel
    const roomTypes = await RoomType.find({ hotel_id: hotelId });

    // Fetch amenities linked to the hotel using HotelAmenity
    const hotelAmenitiesLinks = await HotelAmenity.find({ hotel_id: hotelId });
    const hotelAmenities = await Amenity.find({
      _id: { $in: hotelAmenitiesLinks.map(link => link.amenity_id) }
    });

    // Fetch amenities linked to the room types using RoomTypeAmenity
    const roomTypeAmenities = await Promise.all(
      roomTypes.map(async roomType => {
        const roomTypeAmenityLinks = await RoomTypeAmenity.find({
          room_type_id: roomType._id
        });
        const amenities = await Amenity.find({
          _id: { $in: roomTypeAmenityLinks.map((link: any) => link.amenity_id) }
        });
        return {
          roomType: roomType,
          amenities: amenities
        };
      })
    );

    // Combine data to send as response
    const responseData = {
      hotel,
      roomTypes,
      hotelAmenities,
      roomTypeAmenities
    };

    res.status(200).json(responseData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching hotel details', error });
  }
};
