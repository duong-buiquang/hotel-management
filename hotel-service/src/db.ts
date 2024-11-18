import mongoose, { ConnectOptions } from 'mongoose';
import * as dotenv from 'dotenv';
import Amenity from './models/Amenity';
import Hotel from './models/Hotel';
import HotelAmenity from './models/HotelAmenity';
import Room from './models/Room';
import RoomInventory from './models/RoomInventory';
import RoomPricing from './models/RoomPricing';
import RoomType from './models/RoomType';
import RoomTypeAmenity from './models/RoomTypeAmenity';
import User from './models/User';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/hotelManagement',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } as ConnectOptions
    );

    // const user2 = await User.create({
    //   user_type: 'manager',
    //   name: 'Jane Smith',
    //   phoneNumber: '0123456789003',
    //   password: '123132'
    // });
    // // Create another mock hotel
    // const hotel2 = await Hotel.create({
    //   manager_id: user2._id,
    //   name: 'Cozy Beachfront Resort',
    //   description: 'A beautiful beachfront resort with stunning views.',
    //   address: '456 Beachfront Dr, Seaside Town',
    //   images: [
    //     'https://placehold.co/400',
    //     'https://placehold.co/400',
    //     'https://placehold.co/400',
    //     'https://placehold.co/400',
    //     'https://placehold.co/400'
    //   ],
    //   created_at: new Date()
    // });

    // // Create additional room types
    // const suiteRoom = await RoomType.create({
    //   hotel_id: hotel2._id,
    //   name: 'Suite Room',
    //   description: 'A luxurious suite with a breathtaking ocean view.',
    //   num_beds: 1,
    //   bed_type: 'Queen',
    //   max_occupancy: 4,
    //   base_price: 250
    // });

    // const familyRoom = await RoomType.create({
    //   hotel_id: hotel2._id,
    //   name: 'Family Room',
    //   description: 'Spacious room perfect for families.',
    //   num_beds: 3,
    //   bed_type: 'Double',
    //   max_occupancy: 6,
    //   base_price: 200
    // });

    // // Create rooms for these room types
    // const newRooms = await Room.insertMany([
    //   { room_type_id: suiteRoom._id, room_number: 'SR101' },
    //   { room_type_id: suiteRoom._id, room_number: 'SR102' },
    //   { room_type_id: familyRoom._id, room_number: 'FR201' },
    //   { room_type_id: familyRoom._id, room_number: 'FR202' }
    // ]);

    // // Create room inventory for new room types
    // const today = new Date();
    // await RoomInventory.insertMany([
    //   {
    //     room_type_id: suiteRoom._id,
    //     date: today,
    //     available_rooms: 2,
    //     created_at: today
    //   },
    //   {
    //     room_type_id: familyRoom._id,
    //     date: today,
    //     available_rooms: 3,
    //     created_at: today
    //   }
    // ]);

    // // Create room pricing for new room types
    // await RoomPricing.insertMany([
    //   {
    //     room_type_id: suiteRoom._id,
    //     date: today,
    //     price: 275,
    //     created_at: today
    //   },
    //   {
    //     room_type_id: familyRoom._id,
    //     date: today,
    //     price: 220,
    //     created_at: today
    //   }
    // ]);

    // // Create new amenities
    // const breakfastAmenity = await Amenity.create({
    //   name: 'Complimentary Breakfast',
    //   description: 'Enjoy a complimentary breakfast buffet every morning.'
    // });

    // const spaAmenity = await Amenity.create({
    //   name: 'Spa and Wellness Center',
    //   description: 'Relax and rejuvenate at our full-service spa.'
    // });

    // // Associate new amenities with the hotel
    // await HotelAmenity.create({
    //   hotel_id: hotel2._id,
    //   amenity_id: breakfastAmenity._id
    // });

    // await HotelAmenity.create({
    //   hotel_id: hotel2._id,
    //   amenity_id: spaAmenity._id
    // });

    // // Associate amenities with new room types
    // await RoomTypeAmenity.create({
    //   room_type_id: suiteRoom._id,
    //   amenity_id: spaAmenity._id
    // });

    // await RoomTypeAmenity.create({
    //   room_type_id: familyRoom._id,
    //   amenity_id: breakfastAmenity._id
    // });

    console.log('Mock data created successfully.');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
