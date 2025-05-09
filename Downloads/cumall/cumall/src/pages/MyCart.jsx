import React from "react";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { LuCircleEqual } from "react-icons/lu";
import { useSelector, useDispatch } from "react-redux";
import Button from "../components/ui/Button";
import {
  selectCartItemsCount,
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../redux/features/cart";
import { notify } from "../utils/notify";
import useCreateOrderMutation from "../hooks/useCart";

const SHIPPING = 3000;

export default function MyCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartItemsCount);
  const cartTotal = useSelector(selectCartTotal);
  const { mutate, isLoading, isPending } = useCreateOrderMutation();
  // Write logic to get the user token from local storage or auth context
  // const authToken = localStorage.getItem("token") || null;
  // const { user } = useAuthContext(); // Assuming you have a context for authentication
  const canSave = cartItems.length > 0 && !isLoading;

  // The room number and hall are hardcoded for now. You can replace them with dynamic values later from the user context or props.
  const placeOrder = async () => {
    // alert("Placing order...");
    let transformedOrderItems = cartItems.map(
      ({ name, id, price, quantity, category }) => ({
        name,
        id,
        price,
        quantity,
        category,
      })
    );

    // Write logic to get the user token from local storage or auth context
    // if (!user) {
    //   notify("successBottom", "Please Sign in to place an order.");
    //   navigate("/login");
    //   return;
    // }
    if (canSave) {
      // get the token from the user context or auth context local storage;
      try {
        const orderBody = {
          items: transformedOrderItems,
          roomNumber: "A210",
          hall: "3",
          ordered_by: "jane@test.com", // Get this from the user context or auth context
          state: 0,
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY4MDNhYzQ5NzY3MDc2OTVjOWI2NTQzYSIsImVtYWlsIjoiamFuZUB0ZXN0LmNvbSIsInVzZXJuYW1lIjoiSmFuZTIzIiwiZmlyc3ROYW1lIjoiSmFuZSIsImxhc3ROYW1lIjoiRG9lIiwicm9sZSI6IkFkbWluIiwicm9vbU51bWJlciI6IkEyMTAiLCJoYWxsIjoiMyJ9LCJpYXQiOjE3NDY1MjM3NjQsImV4cCI6MTc0NjUyNzM2NH0.9en6tTXJpAkTpDpshztFwcNfUeKJ0IaLZjk9BgrNSws",
        };
       
        mutate(orderBody);
        if (isPending) {
          notify("info", "Placing order...");
        }
        notify("success", "Order placed successfully!");
        dispatch(clearCart());
        navigate("/");
      } catch (err) {
        notify("error", err);
      }
    } else {
      notify("error", "Please put some items in the cart.");
    }
  };

  return (
    <section className="pb-10 flex flex-col">
      <h2 className="p-10 text-2xl font-semibold">My Cart</h2>

      {cartCount <= 0 ? (
        <p className="m-auto text-lg text-gray-500">Your cart is empty! 🛒</p>
      ) : (
        <>
          <ul className="border-b-2 border-gray-200 pb-4">
            {cartItems.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </ul>

          <div className="flex justify-between items-center pt-10 px-10 sm:px-14 mb-10">
            <PriceCard text="Subtotal" price={cartTotal} />
            <BsFillPlusCircleFill className="shrink-0 text-gray-600" />
            <PriceCard text="Delivery" price={SHIPPING} />
            <LuCircleEqual className="shrink-0 text-gray-600" />
            <PriceCard text="Total" price={cartTotal + SHIPPING} />
          </div>

          <div className="flex justify-center w-full px-12">
            <Button w="full" onClick={placeOrder}>
              Order Now
            </Button>
          </div>
        </>
      )}
    </section>
  );
}
