import { Product } from "@/types/product";

// In a real app this would come from a database or CMS.
// Keeping it as a typed array makes it easy to swap for a fetch() call later.
export const products: Product[] = [
  {
    id: "p1",
    name: "Classic Cotton Tee",
    category: "Apparel",
    price: 599,
    imageUrl: "https://picsum.photos/seed/p1/400/400",
    description: "A soft, breathable everyday t-shirt.",
    inStock: true,
  },
  {
    id: "p2",
    name: "Stainless Steel Bottle",
    category: "Home",
    price: 899,
    imageUrl: "https://picsum.photos/seed/p2/400/400",
    description: "Keeps drinks cold for 24 hours, hot for 12.",
    inStock: true,
  },
  {
    id: "p3",
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 2499,
    imageUrl: "https://picsum.photos/seed/p3/400/400",
    description: "Noise-isolating earbuds with 20-hour battery life.",
    inStock: false,
  },
  {
    id: "p4",
    name: "Leather Notebook",
    category: "Stationery",
    price: 449,
    imageUrl: "https://picsum.photos/seed/p4/400/400",
    description: "A5 hardbound notebook with 200 dotted pages.",
    inStock: true,
  },
];

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategories(): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}
