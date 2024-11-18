// File: /components/hotel/HotelGrid.tsx
import React from 'react';
import HotelCard from './HotelCard';

interface HotelData {
  id: number;
  name: string;
  location: string;
  images: string[];
  price: number;
  rating: number;
  description: string;
  _id: string;
}

interface HotelGridProps {
  hotels: HotelData[];
}

const HotelGrid: React.FC<HotelGridProps> = ({ hotels }) => {
  return (
    <main className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
      {hotels.map(hotel => (
        <HotelCard
          key={hotel._id}
          hotelId={hotel._id}
          name={hotel.name}
          location={hotel.location}
          images={hotel.images}
          price={hotel.price}
          rating={hotel.rating}
          description={hotel.description}
        />
      ))}
    </main>
  );
};

export default HotelGrid;
