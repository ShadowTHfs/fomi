"use client";

import { CategoryName } from "@/lib/types";

interface CategorySectionProps {
  categories: CategoryName[];
  active: CategoryName;
  onChange: (c: CategoryName) => void;
}

export function CategorySection({
  categories,
  active,
  onChange,
}: CategorySectionProps) {
  return (
    <div className="px-4 md:px-6 mt-4 flex gap-2 overflow-x-auto pb-1">
      {categories.map((c, i) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          style={{ transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1.5deg"})` }}
          className={`shrink-0 px-4 py-1.5 text-sm font-bold rounded-lg border-2 border-dashed transition-colors ${
            active === c
              ? "bg-plum text-white border-plum"
              : "bg-white text-plum border-[#d9c7d4] hover:border-plum"
          }`}
        >
          {c}
        </button>
      ))}
    </div>
  );
}
