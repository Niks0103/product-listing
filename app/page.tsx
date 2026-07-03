import ProductGrid from "@/components/ProductGrid";
import { products, getCategories } from "@/data/products";

// Server Component: runs at build time (SSG) since there's no dynamic data source yet.
// Swap `products` for an async fetch() call to a real API and this still works the same way.
export default function HomePage() {
  const categories = getCategories();

  return (
    <main>
      <h1>Our Products</h1>
      <ProductGrid products={products} categories={categories} />
    </main>
  );
}
