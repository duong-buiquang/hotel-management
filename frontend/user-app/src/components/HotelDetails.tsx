import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchHotelDetails } from '../services/hotelService';
import PhotoGrid from './PhotoGrid';
import DatePicker from './DatePicker';

interface RoomType {
  _id: string;
  name: string;
  description: string;
  num_beds: number;
  max_occupancy: number;
  base_price: number;
}

interface Hotel {
  _id: string;
  name: string;
  description: string;
  address: string;
  manager_id: { name: string };
  images: string[];
}

interface HotelDetailsResponse {
  hotel: Hotel;
  roomTypes: RoomType[];
  hotelAmenities: { name: string; description: string }[];
}

const HotelDetails: React.FC = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const [hotelDetails, setHotelDetails] = useState<HotelDetailsResponse | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const response = await fetchHotelDetails(hotelId);
        setHotelDetails(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    loadHotels();
  }, [hotelId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hotelDetails) {
    return <p>Hotel details not found.</p>;
  }

  return (
    <div className="container mx-auto  flex flex-col">
      {/* Main Image */}
      <PhotoGrid photos={hotelDetails.hotel.images} />

      {/* Hotel Information */}
      <h1 className="text-2xl font-bold">{hotelDetails.hotel.name}</h1>
      <p className="text-gray-600">{hotelDetails.hotel.description}</p>
      <p className="text-gray-500 mt-2">{hotelDetails.hotel.address}</p>
      <p className="mt-4">
        Hosted by: <strong>{hotelDetails.hotel.manager_id?.name}</strong>
      </p>

      {/* Room Types */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Available Rooms</h2>
        {hotelDetails.roomTypes.map(room => (
          <div key={room._id} className="p-4 border rounded-lg mb-4">
            <h3 className="text-lg font-bold">{room.name}</h3>
            <p>{room.description}</p>
            <p>
              {room.num_beds} beds, Max occupancy: {room.max_occupancy}
            </p>
            <p className="text-green-600">
              Price: ${room.base_price} per night
            </p>
          </div>
        ))}
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Amenities</h2>
        <ul>
          {hotelDetails.hotelAmenities.map((amenity, index) => (
            <li key={index}>
              {amenity.name}: {amenity.description}
            </li>
          ))}
        </ul>
      </div>
      <DatePicker />
    </div>
  );
};

export default HotelDetails;
