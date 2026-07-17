"use client";

import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  query: string;
  setQuery: (q: string) => void;
  cartCount: number;
  onCartClick: () => void;
  onLogoClick: () => void;
}

export function Header({
  query,
  setQuery,
  cartCount,
  onCartClick,
  onLogoClick,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 bg-ink text-cream shadow-lg">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center gap-3 md:gap-6">
        <button
          onClick={onLogoClick}
          className="flex items-center gap-2 shrink-0 group"
        >
          <span className="text-2xl md:text-3xl -rotate-6 group-hover:rotate-0 transition-transform duration-300">
            🍔
          </span>
          <span className="font-display text-xl md:text-2xl tracking-tight font-extrabold">
            fomi<span className="text-mango">.</span>
          </span>
        </button>

        <div className="flex-1 relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9c8f92]"
          />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar restaurantes ou pratos..."
            className="bg-[#2c2327] border-[#3a2f33] text-cream placeholder:text-[#9c8f92] rounded-full pl-10"
          />
        </div>

        <button
          onClick={onCartClick}
          className="relative shrink-0 bg-mango hover:bg-[#ff9d57] text-ink rounded-full p-2.5 md:px-4 md:py-2 flex items-center gap-2 font-bold transition-colors"
        >
          <ShoppingCart size={20} />
          <span className="hidden md:inline">Carrinho</span>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-lime text-ink text-xs font-extrabold rounded-full w-5 h-5 flex items-center justify-center border-2 border-ink">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}
