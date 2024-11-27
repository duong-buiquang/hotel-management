import { NextFunction, Request, Response } from 'express';
import Hotel from '../models/Hotel';
import { calculateTotalPrice } from '../utils/calculateTotalPrice';
import Reservation from '../models/Reservation';

export const makeReservation = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  try {
    const { userId, hotelId, checkInDate, checkOutDate } = req.body;
    // Fetch room details to get the price per day
    const hotel = await Hotel.findById(hotelId);
    if (!hotel) {
      return res.status(404).json({ message: 'Room not found' });
    }
    // Calculate the total price
    const totalPrice = calculateTotalPrice(
      checkInDate,
      checkOutDate,
      hotel.price
    );

    // Create the reservation
    const reservation = await Reservation.create({
      userId,
      hotelId,
      checkInDate,
      checkOutDate,
      totalPrice
    });

    res.status(201).json({ message: 'Reservation created', reservation });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
