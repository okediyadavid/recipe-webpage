import React, { memo } from 'react';
import { useSelector } from "react-redux";
import { selectCartItemsCount } from '../redux/features/cart';

const CartStatus = memo(() => {
  // const { cartQuery: { data: products } } = useCart();
  const cartCount = useSelector(selectCartItemsCount);

  return (
    <div className="relative">
      🛒 Cart
      {cartCount > 0 && (
        <span className="absolute -top-2 -right-3 w-6 h-6 flex items-center justify-center bg-red-500 text-white font-bold rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
});

export default CartStatus;
