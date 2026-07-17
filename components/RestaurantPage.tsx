"use client";

import { useState } from "react";
import { Restaurant, Product, CategoryName } from "@/lib/types";
import { MENU, CATEGORY_ORDER } from "@/lib/mock-data";
import { RestaurantBanner } from "@/components/RestaurantBanner";
import { CategorySection } from "@/components/CategorySection";
import { ProductCard } from "@/components/ProductCard";

interface RestaurantPageProps {
  restaurant: Restaurant;
  onBack: () => void;
  onAdd: (product: Product, restaurant: Restaurant) => void;
}

export function RestaurantPage({ restaurant, onBack, onAdd }: RestaurantPageProps) {
  const menu = MENU[restaurant.id] || {};
  const categories = CATEGORY_ORDER.filter((c) => menu[c]) as CategoryName[];
  const [activeCat, setActiveCat] = useState<CategoryName>(categories[0]);

  return (
    <div className="max-w-6xl mx-auto pb-16">
      <RestaurantBanner restaurant={restaurant} onBack={onBack} />

      <CategorySection
        categories={categories}
        active={activeCat}
        onChange={setActiveCat}
      />

      <div className="px-4 md:px-6 mt-4 grid sm:grid-cols-2 gap-3">
        {(menu[activeCat] || []).map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAdd={(prod) => onAdd(prod, restaurant)}
          />
        ))}
      </div>
    </div>
  );
}
