import React from 'react';
import PropTypes from 'prop-types';

export default function PrizeCard({ text, price, currency = '₦' }) {
  return (
    <div className="bg-gray-100 p-6 mx-2 rounded-2xl shadow-md text-center text-sm sm:p-8 sm:text-lg md:text-xl">
      <p className="text-gray-600">{text}</p>
      <p className="font-semibold text-brand-active text-xl md:text-2xl">
        {currency}{price.toLocaleString()}
      </p>
    </div>
  );
}

PrizeCard.propTypes = {
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  currency: PropTypes.string,
};
