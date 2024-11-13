// File: /components/hotel/HotelCard.tsx
import React from 'react';
import styles from './HotelCard.module.css';

interface HotelProps {
  name: string;
  location: string;
  images: string[];
  price: number;
  rating: number;
}

const HotelCard: React.FC<HotelProps> = ({
  name,
  location,
  images,
  price,
  rating
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={images[0]} alt={name} className={styles.image} />
      </div>
      <div className={styles.details}>
        <h3>{name}</h3>
        <p>{location}</p>
        <p>Rating: {rating} ⭐</p>
        <p>Price: ${price} per night</p>
      </div>
    </div>
  );
};

export default HotelCard;
