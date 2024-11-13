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
}

interface HotelGridProps {
  hotels: HotelData[];
}

const HotelGrid: React.FC<HotelGridProps> = ({ hotels }) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {hotels.map(hotel => (
        <HotelCard
          key={hotel.id}
          name={hotel.name}
          location={hotel.location}
          images={hotel.images}
          price={hotel.price}
          rating={hotel.rating}
        />
      ))}
    </div>
  );
};

export default HotelGrid;
