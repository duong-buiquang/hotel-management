// File: /components/hotel/HotelCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HotelProps {
  hotelId: string;
  name: string;
  location: string;
  images: string[];
  price: number;
  rating: number;
  description: string;
}

const HotelCard: React.FC<HotelProps> = ({
  hotelId,
  name,
  location,
  images,
  price,
  rating,
  description
}) => {
  const navigate = useNavigate();
  const moveToHotelDetails = () => {
    navigate(`/rooms/${hotelId}`);
  };
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
      onClick={moveToHotelDetails}
    >
      {images && images.length > 0 && (
        <div className="mb-3 overflow-hidden rounded-md">
          <img
            src={images[0]}
            alt={name}
            className="w-full h-32 md:h-40 object-cover rounded-md transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <div className="mb-2">
        <h2 className="text-base font-medium text-[#222222] mb-1">{name}</h2>
        <p className="text-sm text-gray-500">{location}</p>
      </div>
      <p className="text-gray-700 text-sm mb-2">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-gray-600">
          Price: <span className="font-semibold">${price} / night</span>
        </p>
        <p className="text-sm text-yellow-500">Rating: {rating} ⭐</p>
      </div>
    </div>
  );
};

export default HotelCard;
