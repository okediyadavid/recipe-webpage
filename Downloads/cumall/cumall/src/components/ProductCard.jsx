import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { uuid, title, productImage, price } = product;

  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate(`/products/${uuid}`, { state: { product } })}
      className="cursor-pointer transition-all hover:scale-110 rounded-2xl"
    >
      <img
        className="w-full rounded-t-2xl"
        src={`https://cumall-backend.onrender.com/${productImage}`}
        alt={title}
      />
      <div className="p-4 bg-white rounded-b-2xl">
        <h3 className="truncate heading-6 text-lg font-bold">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-lg text-gray-600">Price:</p>
          <p className="font-semibold">{price.toLocaleString()}</p>
        </div>
        <button className="text-sm w-full sm:text-base bg-gradient-to-r from-green-400 to-green-600 block rounded-md px-3 py-2 text-white my-4 hover:shadow-lg hover:scale-105 transition-all">
          Add to Cart
        </button>
      </div>
    </li>
  );
}
