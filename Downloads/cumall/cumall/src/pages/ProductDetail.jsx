import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Button from "../components/ui/Button";
import { addItemToCart } from "../redux/features/cart";
//import { useAuthContext } from "../context/AuthContext";
// import useCart from "../hooks/useCart";

export default function ProductDetail() {
  // const { addOrUpdateItem } = useCart();
  // const { uid } = useAuthContext();

  const dispatch = useDispatch();

  const {
    state: {
      product: { uuid, productImage, title, description, category, price, options },
    },
  } = useLocation();

  const [selected, setSelected] = useState(options && options[0]);
  const [success, setSuccess] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!uid) {
    //   window.alert("🔑 Please login to add items to your cart.");
    //   return;
    // }

    setIsLoading(true);

    // const product = {
    //   uuid,
    //   image,
    //   title,
    //   price,
    //   option: selected,
    //   quantity: 1,
    // };
    dispatch(addItemToCart(title, price, uuid, productImage, category));
    setSuccess(`✅ ${title} has been added to your cart!`);
    setIsLoading(false);
    // addOrUpdateItem.mutate(product, {
    //   onSuccess: () => {
    //     setSuccess(`✅ ${title} has been added to your cart!`);
    //     setTimeout(() => setSuccess(null), 3000);
    //   },
    //   onSettled: () => setIsLoading(false),
    // });
  };

  const handleSelect = (e) => setSelected(e.target.value);

  return (
    <section className="flex flex-col lg:flex-row gap-10 p-5">
      {/* Product Image */}
      <div className="w-full sm:w-2/3 lg:w-1/2">
        <img
          className="w-full rounded-lg shadow-md transition duration-300 hover:scale-105"
          src={`http://localhost:3000/${productImage}`}
          alt={title}
        />
      </div>

      {/* Product Details */}
      <div className="pt-10 w-full lg:pr-10">
        <span className="bg-green-500 text-white py-1 px-3 text-sm rounded-md mb-4 inline-block">
          {category}
        </span>
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-xl font-bold text-gray-700 mt-2">
          ₦{price.toLocaleString()}
        </p>
        <hr className="w-full my-4 border-gray-300" />

        {/* Description */}
        <p
          className="text-gray-600"
          dangerouslySetInnerHTML={{
            __html: description.replace(/\n/g, "<br>"),
          }}
        />

        {/* Add to Cart Form */}
        <form onSubmit={handleSubmit} className="flex flex-col w-full py-10">
          {/* Size Selection */}
          <div className="pb-6">
            <label className="mr-2 font-medium" htmlFor="size">
              Size:
            </label>
            <select
              className="text-brand-active outline-none cursor-pointer border p-2 rounded-md"
              onChange={handleSelect}
              value={selected}
              id="size"
            >
              {options?.map((option, index) => (
                <option key={index}>{option}</option>
              ))}
            </select>
          </div>

          {/* Success Message */}
          {success && (
            <p className="my-2 text-green-600 font-medium">{success}</p>
          )}

          {/* Add to Cart Button */}
          <Button disabled={isLoading}>
            {isLoading ? "🛒 Adding..." : "Add to Cart"}
          </Button>
        </form>
      </div>
    </section>
  );
}
