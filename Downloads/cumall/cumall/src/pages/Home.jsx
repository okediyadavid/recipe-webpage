import React, { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// Lazy load components for better performance
const Banner = lazy(() => import("../components/Banner"));
const Products = lazy(() => import("../components/Products"));

export default function Home() {
  const { pathname } = useLocation(); // Get the current path
  const [activeTab, setActiveTab] = useState(pathname);
  const categories = [
    {
      name: "Stationeries",
      urlPath: "/category/Stationeries",
    },
    {
      name: "Personal Care",
      urlPath: "/category/Personal%20Care",
    },
    {
      name: "Dorm Essentials",
      urlPath: "/category/Dorm%20Essentials",
    },
    {
      name: "Sports & Fitness",
      urlPath: "/category/Sports%20Fitness",
    },
    {
      name: "Electronics",
      urlPath: "/category/Electronics",
    },
  ];
  return (
    <Suspense fallback={<p className="text-center">Loading home page...</p>}>
      <div className="bg-purple-100 min-h-screen p-6">
        {/* Banner Section */}
        <Banner />

        {/* Who We Are Section */}
        <div className="text-center mt-8">
          <h2 className="text-2xl font-bold">Welcome to CU Shopping Mall!!</h2>
          <div className="bg-white shadow-md p-4 mt-2 w-80 mx-auto rounded">
            <h3 className="font-semibold">Who We Are</h3>
            <p className="text-sm text-gray-600">
              A one-stop campus shopping experience offering convenience and
              affordability.
            </p>
          </div>
        </div>

        {/* Animated "WE ARE OPEN!!" */}
        <motion.h1
          className="text-3xl font-bold text-center mt-6"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
        >
          WE ARE OPEN!!
        </motion.h1>

        {/* Shop By Category Section */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-bold mb-4">Shop By Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(({ name, urlPath }) => (
              <Link
                key={name}
                to={urlPath}
                onClick={() => setActiveTab(name)}
                className="bg-white p-4 shadow-md rounded cursor-pointer hover:bg-gray-100"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-8">
          <h2 className="text-xl font-bold text-center mb-4">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {[
              "How can I place an order?",
              "What payment methods are accepted?",
              "Can I return or exchange an item?",
              "How long does delivery take?",
              "Do you offer discounts for students?",
            ].map((question, index) => (
              <details
                key={index}
                className="bg-green-100 p-3 rounded shadow-md cursor-pointer"
              >
                <summary className="font-semibold">{question}</summary>
                <p className="text-sm text-gray-700 mt-2">
                  {index === 0
                    ? "You can place an order by adding items to your cart and proceeding to checkout."
                    : index === 1
                    ? "We accept credit/debit cards, mobile payments, and bank transfers."
                    : index === 2
                    ? "We're sorry, but returns for website purchases are not available at this time."
                    : index === 3
                    ? "Delivery usually takes 2-5 business days within the campus."
                    : "Yes! Students get exclusive discounts on selected items."}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
