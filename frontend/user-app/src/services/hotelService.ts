// File: /services/hotelService.ts
import axios from 'axios';

export const fetchHotels = () => {
  return axios.get('http://localhost:5002/api/hotels'); // Replace with your backend endpoint
};

export const fetchHotelDetails = (hotelId: string | undefined) => {
  return axios.get(`http://localhost:5002/api/hotels/${hotelId}`);
};
