"use client";

interface FiltersProps {
  categories: string[];
  activeCategory: string | null;
  onSelect: (category: string | null) => void;
}

export default function Filters({ categories, activeCategory, onSelect }: FiltersProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onSelect(null)}
        className={
          "px-3 py-1 rounded-md text-sm " +
          (activeCategory === null ? "font-semibold bg-slate-100" : "font-normal bg-transparent")
        }
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={
            "px-3 py-1 rounded-md text-sm " +
            (activeCategory === category ? "font-semibold bg-slate-100" : "font-normal bg-transparent")
          }
        >
          {category}
        </button>
      ))}
    </div>
  );
}
