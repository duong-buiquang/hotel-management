// File: /pages/HomePage.tsx
import React, { useEffect, useState } from 'react';
import HotelGrid from '../components/hotel/HotelGrid';
import { fetchHotels } from '../services/hotelService';

const HomePage: React.FC = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const loadHotels = async () => {
      try {
        const response = await fetchHotels();
        setHotels(response.data.hotels);
        console.log(response.data.hotels);
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    loadHotels();
  }, []);

  return (
    <div className="min-h-screen p-4">
      <HotelGrid hotels={hotels} />
    </div>
  );
};

export default HomePage;
