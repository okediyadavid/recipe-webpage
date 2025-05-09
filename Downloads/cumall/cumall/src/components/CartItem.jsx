import React, { memo } from "react";
import { useDispatch } from "react-redux";
import {
  AiFillPlusSquare,
  AiFillMinusSquare,
  AiFillDelete,
} from "react-icons/ai";
import {
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
} from "../redux/features/cart";
//import useCart from "../hooks/useCart";

const ICON_CLASS =
  "text-brand-green transition-all cursor-pointer hover:text-brand-active";

const CartItem = memo(({ product }) => {
  const { id, title, imageLink, price, quantity, option } = product;
  //const { addOrUpdateItem, removeItem } = useCart();
  const dispatch = useDispatch();

  // const handleQuantityChange = (change) => {
  //   if (quantity + change < 1) return;
  //   addOrUpdateItem.mutate({ ...product, quantity: quantity + change });
  // };

  return (
    <li className="flex justify-between items-center p-4 border-b">
      <img
        className="w-32 rounded-lg shadow-sm"
        src={`http://localhost:3000/${imageLink}`}
        alt={title}
      />
      <div className="flex-1 flex flex-col md:flex-row justify-between items-center ml-4">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{option}</p>
          <p className="text-xl font-bold">{price.toLocaleString()}₦</p>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <AiFillMinusSquare
            className={`${ICON_CLASS} hover:-rotate-6`}
            onClick={() => dispatch(removeItemFromCart(id))}
          />
          <span className="text-lg">{quantity}</span>
          <AiFillPlusSquare
            className={`${ICON_CLASS} hover:rotate-6`}
            onClick={() => dispatch(addItemToCart(title, price, id, imageLink))}
          />
          <AiFillDelete
            className={`${ICON_CLASS} hover:scale-125`}
            onClick={() => dispatch(clearItemFromCart(id))}
          />
        </div>
        <p className="w-32 text-right font-semibold">
          {(price * quantity).toLocaleString()}₦
        </p>
      </div>
    </li>
  );
});

export default CartItem;
