import React from 'react';
import { FaStar } from 'react-icons/fa';

function RatingStars({ rating }) {
  const rate = Number(rating);

  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={index < rate ? 'star' : 'star-empty'}
        />
      ))}
    </div>
  );
}

export default RatingStars;
