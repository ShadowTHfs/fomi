"use client";

import { ChevronLeft, Star, Clock, Bike } from "lucide-react";
import { Restaurant } from "@/lib/types";
import { currency } from "@/lib/utils";

interface RestaurantBannerProps {
  restaurant: Restaurant;
  onBack: () => void;
}

export function RestaurantBanner({ restaurant, onBack }: RestaurantBannerProps) {
  return (
    <>
      <div
        className="h-40 md:h-56 relative flex items-end"
        style={{ background: restaurant.banner }}
      >
        <button
          onClick={onBack}
          className="absolute top-4 left-4 bg-white/90 hover:bg-white text-ink rounded-full p-2 shadow"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="absolute -bottom-8 left-4 md:left-6 w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center text-4xl border-4 border-white">
          {restaurant.logo}
        </div>
      </div>

      <div className="px-4 md:px-6 pt-11 pb-2">
        <h1 className="font-display font-extrabold text-2xl md:text-3xl text-ink">
          {restaurant.name}
        </h1>
        <p className="text-sm text-[#8a7a7d]">{restaurant.category}</p>
        <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-[#5a4d50]">
          <span className="flex items-center gap-1 font-semibold text-ink">
            <Star size={15} className="fill-mango text-mango" />
            {restaurant.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={15} /> {restaurant.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Bike size={15} /> {currency(restaurant.deliveryFee)}
          </span>
          <span className="text-xs bg-[#FFF3E4] px-2.5 py-1 rounded-full">
            {restaurant.hours}
          </span>
        </div>
      </div>
    </>
  );
}
