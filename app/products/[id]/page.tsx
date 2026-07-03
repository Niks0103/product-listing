import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductById, products } from "@/data/products";

interface ProductPageProps {
  params: { id: string };
}

// Pre-renders a static page for every product at build time (SSG).
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={400}
        height={400}
        style={{ borderRadius: 8 }}
      />
      <h1>{product.name}</h1>
      <p style={{ color: "#666" }}>{product.category}</p>
      <p style={{ fontWeight: 600, fontSize: 20 }}>₹{product.price}</p>
      <p>{product.description}</p>
      <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
    </main>
  );
}
