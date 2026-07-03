"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="border border-slate-200 rounded-lg p-4 shadow-sm">
      <Link href={`/products/${product.id}`} className="block">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={400}
          style={{ width: "100%", height: "auto", borderRadius: 6 }}
        />
        <h3 className="mt-3 mb-1 text-lg font-medium">{product.name}</h3>
      </Link>
      <p className="text-sm text-slate-500">{product.category}</p>
      <p className="font-semibold mt-2">₹{product.price}</p>
      <button
        onClick={() => addItem(product)}
        disabled={!product.inStock}
        className="w-full mt-3 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 disabled:bg-slate-300"
      >
        {product.inStock ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
