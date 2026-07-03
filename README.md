# Product Listing Starter (Next.js + TypeScript)

A small e-commerce-style product listing app to practice Next.js App Router + TypeScript,
built on top of the same "product listing" domain from the Suhana Masale project.

## What's inside

- `app/page.tsx` — home page, statically generated (SSG), renders the product grid
- `app/products/[id]/page.tsx` — dynamic product detail page, one static page per product
- `context/CartContext.tsx` — typed cart state using React Context + useReducer
- `components/` — ProductCard, ProductGrid, Filters
- `data/products.ts` — mock data source (swap for a real API/fetch call later)
- `types/product.ts` — shared TypeScript interfaces

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Suggested next steps to extend this (in order of learning value)

1. **Replace mock data with a real API.** Use a free API like [Fake Store API](https://fakestoreapi.com/)
   or [DummyJSON](https://dummyjson.com/products) — change `data/products.ts` to an async `fetch()`
   and mark `HomePage` as `async`. This teaches typed API response handling.
2. **Add a cart page** at `app/cart/page.tsx` that reads from `useCart()` and lists items with
   remove buttons and a total — reuses the context you already have.
3. **Add search** — a text input in `Filters.tsx` that filters by product name, combined with
   the existing category filter.
4. **Add basic tests** with Jest + React Testing Library — start with a test for `ProductCard`
   (renders name/price, "Add to Cart" button calls `addItem`).
5. **Deploy to Vercel** — push to GitHub, import the repo at vercel.com, zero-config deploy.
   This gives you a live link to put on your resume.
6. **Add loading/error states** if you move to a real API — `loading.tsx` and `error.tsx` files
   are built into the App Router and are worth knowing.
