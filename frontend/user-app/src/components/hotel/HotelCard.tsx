// File: /components/hotel/HotelCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomCarousel } from '../CustomCarousel';

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
  const moveToHotelDetails = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (target.closest('.next-prev')) return;
    navigate(`/rooms/${hotelId}`);
  };

  return (
    <div
      className="bg-white rounded-lg cursor-pointer group"
      onClick={e => moveToHotelDetails(e)}
    >
      {images && images.length > 0 && (
        <div className="mb-3 overflow-hidden rounded-md">
          <CustomCarousel images={images} />
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
