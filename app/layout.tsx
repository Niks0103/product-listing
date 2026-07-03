import { ReactNode } from "react";
import { CartProvider } from "@/context/CartContext";
import "./globals.css";

export const metadata = {
  title: "Product Listing Starter",
  description: "A Next.js + TypeScript product listing demo",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans max-w-3xl mx-auto p-5">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
