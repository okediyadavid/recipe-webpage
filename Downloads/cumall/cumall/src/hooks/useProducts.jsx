import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewProduct } from "../api/firebase";

export default function useProducts({ category, page }) {
  console.log("useProducts hook called with category:", category, "and page:", page);
  const queryClient = useQueryClient();

  // Fetch products with optimized query settings
  const productsQuery = useQuery({
    queryKey: ["products", { category, page }],
    queryFn: async ({ queryKey }) => {
      const [_key, { category, page }] = queryKey;
      const response = await fetch(`https://cumall-backend.onrender.com/api/product?page=${page}`);
      console.log("Fetching products from API...", response);
      return await response.json();
    },
    staleTime: 1000 * 60 * 5, // Products remain fresh for 5 minutes
    cacheTime: 1000 * 60 * 10, // Cached for 10 minutes
    retry: 2, // Retries failed requests twice
    refetchOnWindowFocus: false, // Prevents refetching when switching tabs
  });

  // Fetch products by category with optimized query settings 
  const fetchProductsByCategory = async ({ queryKey }) => {
    const [_key, { category, page }] = queryKey;
    const response = await fetch(
      `https://cumall-backend.onrender.com/api/product/category/${category}?page=${page}`
    );
    console.log("Fetching products by category from API...", response);
    return await response.json();
  };

  const productsByCategoryQuery = useQuery({
    queryKey: ["productsByCategory", { category, page }],
    queryFn: fetchProductsByCategory,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    retry: 2,
    refetchOnWindowFocus: false,
  });

  // Mutation to add a new product
  const addProduct = useMutation({
    mutationFn: ({ product, url }) => addNewProduct(product, url),
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]); // Refresh product list after adding
    },
    onError: (error) => console.error("Failed to add product:", error),
  });

  return { productsQuery, productsByCategoryQuery, addProduct };
}
