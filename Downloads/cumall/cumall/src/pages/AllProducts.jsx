import React, { Suspense, lazy } from 'react';

// Lazy load the Products component for performance optimization
const Products = lazy(() => import('../components/Products'));

export default function AllProducts() {
  return (
    <Suspense fallback={<p className="text-center">Loading products...</p>}>
      <Products />
    </Suspense>
  );
}
