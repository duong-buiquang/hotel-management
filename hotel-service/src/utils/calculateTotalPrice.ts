/**
 * Calculates the total price for a hotel booking
 *
 * @param checkInDate - Check-in date in ISO format (e.g., "2024-12-10")
 * @param checkOutDate - Check-out date in ISO format (e.g., "2024-12-15")
 * @param roomPricePerDay - The price of the room per day (number)
 * @returns The total price for the booking
 */
export const calculateTotalPrice = (
  checkInDate: string,
  checkOutDate: string,
  roomPricePerDay: number
): number => {
  const checkIn = new Date(checkInDate);
  const checkOut = new Date(checkOutDate);

  // Calculate the difference in days between check-in and check-out
  const timeDifference = checkOut.getTime() - checkIn.getTime();
  const days = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Ensure there are no negative or zero days
  if (days <= 0) {
    throw new Error('Invalid booking dates. Check-out must be after check-in.');
  }

  // Calculate the total price
  const totalPrice = days * roomPricePerDay;
  return totalPrice;
};
