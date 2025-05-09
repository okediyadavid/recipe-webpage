import React from "react";
import ProductCard from "./ProductCard";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts({ category: "All", page: 1 });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 min-h-screen">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="w-full h-64 bg-gray-200 animate-pulse rounded-xl"
          ></div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center p-4">
        🚨 Oops! Something went wrong. Please try again later.
      </p>
    );
  }

  if (
    !products ||
    products.productItems.length === 0 ||
    products.message === "Could not find product items." ||
    products.success === false
  ) {
    return (
      <p className="text-gray-500 text-center p-4">
        😞 No products available at the moment.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 min-h-screen">
      {products.productItems.map((product) => (
        <ProductCard key={product.uuid} product={product} />
      ))}
    </ul>
  );
}
