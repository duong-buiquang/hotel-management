const mongoose = require('mongoose');
const Room = require('./models/Room'); // Adjust path as needed
const RoomType = require('./models/RoomType');
const Hotel = require('./models/Hotel');

const createMockData = async () => {
  try {
    // Connect to MongoDB (replace with your own connection string)
    await mongoose.connect('mongodb://localhost:27017/hotelDB', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Clear existing da

    // Create a mock hotel
    const hotel = await Hotel.create({
      name: 'Grand Hotel',
      address: '123 Main St, Cityville',
      description: 'A luxurious hotel in the heart of the city'
    });

    // Create a mock room type
    const roomType = await RoomType.create({
      name: 'Deluxe Suite',
      hotelId: hotel._id,
      description: 'A spacious room with premium amenities',
      numBeds: 2,
      bedType: 'King',
      maxOccupancy: 4,
      basePrice: 200
    });

    // Generate 20 mock rooms with 5 different images each
    for (let i = 1; i <= 20; i++) {
      const roomImages = Array.from(
        { length: 5 },
        (_, index) =>
          `https://placehold.co/400x300?text=Room+${i}+Image+${index + 1}`
      );

      await Room.create({
        roomTypeId: roomType._id,
        roomNumber: `${100 + i}`, // Room numbers 101, 102, ..., 120
        images: roomImages
      });
    }

    console.log('20 mock rooms created successfully');
    process.exit();
  } catch (error) {
    console.error('Error creating mock data:', error);
    process.exit(1);
  }
};

createMockData();
