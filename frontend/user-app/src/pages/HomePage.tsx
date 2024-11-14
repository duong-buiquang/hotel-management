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
      } catch (error) {
        console.error('Error fetching hotels:', error);
      }
    };

    loadHotels();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <header className="bg-blue-600 text-white p-4 rounded mb-4">
        <h1 className="text-2xl font-bold">Welcome to the Hotel Booking App</h1>
      </header>
      <HotelGrid hotels={hotels} />
      <footer className="mt-8 p-4 bg-gray-800 text-white text-center">
        &copy; {new Date().getFullYear()} Hotel Booking. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
