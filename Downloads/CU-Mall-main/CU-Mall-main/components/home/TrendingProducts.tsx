"use client"

import { useState, useEffect } from "react"
import { productsApi, type Product } from "@/lib/api"
import { ProductCard } from "@/components/product/ProductCard"
import { ProductCardSkeleton } from "@/components/product/ProductCardSkeleton"

export default function TrendingProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsApi.getAll(1)
        const allProducts = response.data || []

        // Shuffle array function
        const shuffleArray = (array: Product[]) => {
          const newArray = [...array]
          for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]]
          }
          return newArray
        }

        // Get random products for trending
        const shuffledProducts = shuffleArray(allProducts)
        setProducts(shuffledProducts.slice(0, 4))
      } catch (error) {
        console.error("Failed to fetch trending products:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.uuid} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
