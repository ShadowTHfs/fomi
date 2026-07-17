"use client";

import { Star, Clock, Bike } from "lucide-react";
import { Restaurant } from "@/lib/types";
import { currency } from "@/lib/utils";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onSelect: (r: Restaurant) => void;
}

export function RestaurantCard({ restaurant: r, onSelect }: RestaurantCardProps) {
  return (
    <button
      onClick={() => r.open && onSelect(r)}
      disabled={!r.open}
      className={`text-left bg-white rounded-2xl border border-[#eee2d4] overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 ${
        !r.open ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <div
        className="h-24 flex items-center justify-center text-4xl relative"
        style={{ background: r.banner }}
      >
        {r.logo}
        <span
          className={`absolute top-2 right-2 text-[11px] font-bold px-2 py-0.5 rounded-full border-2 border-ink ${
            r.open ? "bg-lime text-ink" : "bg-[#e5e5e5] text-[#555]"
          }`}
        >
          {r.open ? "Aberto" : "Fechado"}
        </span>
      </div>
      <div className="p-3.5">
        <h3 className="font-display font-bold text-ink text-lg leading-tight">
          {r.name}
        </h3>
        <p className="text-xs text-[#8a7a7d] mt-0.5">{r.category}</p>
        <div className="flex items-center gap-3 mt-2.5 text-xs text-[#5a4d50] flex-wrap">
          <span className="flex items-center gap-1 font-semibold text-ink">
            <Star size={13} className="fill-mango text-mango" />
            {r.rating}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={13} /> {r.deliveryTime}
          </span>
          <span className="flex items-center gap-1">
            <Bike size={13} /> {currency(r.deliveryFee)}
          </span>
        </div>
      </div>
    </button>
  );
}
