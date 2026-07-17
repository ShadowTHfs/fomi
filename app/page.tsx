"use client";

import { useMemo, useState } from "react";
import { Restaurant, Product, CartItem } from "@/lib/types";
import { RESTAURANTS } from "@/lib/mock-data";
import { Header } from "@/components/Header";
import { RestaurantCard } from "@/components/RestaurantCard";
import { RestaurantPage } from "@/components/RestaurantPage";
import { Cart } from "@/components/Cart";
import { CheckoutModal } from "@/components/CheckoutModal";

type View = "list" | "restaurant";

export default function Home() {
  const [view, setView] = useState<View>("list");
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(
    null
  );
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartRestaurant, setCartRestaurant] = useState<Restaurant | null>(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [query, setQuery] = useState("");

  const filteredRestaurants = useMemo(
    () =>
      RESTAURANTS.filter((r) =>
        (r.name + r.category).toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total =
    subtotal + (cart.length > 0 && cartRestaurant ? cartRestaurant.deliveryFee : 0);

  const handleSelectRestaurant = (r: Restaurant) => {
    setSelectedRestaurant(r);
    setView("restaurant");
  };

  const handleAdd = (product: Product, restaurant: Restaurant) => {
    if (cartRestaurant && cartRestaurant.id !== restaurant.id && cart.length > 0) {
      const ok = window.confirm(
        `Seu carrinho já tem itens de ${cartRestaurant.name}. Deseja limpar e adicionar itens de ${restaurant.name}?`
      );
      if (!ok) return;
      setCart([]);
    }
    setCartRestaurant(restaurant);
    setCart((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const handleConfirmOrder = () => {
    setSuccess(true);
  };

  const closeCheckout = () => {
    setCheckoutOpen(false);
    if (success) {
      setCart([]);
      setCartRestaurant(null);
      setCartOpen(false);
    }
    setSuccess(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header
        query={query}
        setQuery={setQuery}
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
        onLogoClick={() => setView("list")}
      />

      {view === "list" ? (
        <main className="max-w-6xl mx-auto px-4 md:px-6 py-6">
          <div className="mb-5">
            <h1 className="font-display font-extrabold text-2xl md:text-3xl text-ink">
              Vem pra fome <span className="text-mango">boa</span> 😋
            </h1>
            <p className="text-sm text-[#8a7a7d] mt-1">
              {filteredRestaurants.length} restaurantes por perto
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRestaurants.map((r) => (
              <RestaurantCard key={r.id} restaurant={r} onSelect={handleSelectRestaurant} />
            ))}
            {filteredRestaurants.length === 0 && (
              <p className="text-sm text-[#8a7a7d] col-span-full text-center py-10">
                Nenhum restaurante encontrado para &quot;{query}&quot;.
              </p>
            )}
          </div>
        </main>
      ) : (
        selectedRestaurant && (
          <RestaurantPage
            restaurant={selectedRestaurant}
            onBack={() => setView("list")}
            onAdd={handleAdd}
          />
        )
      )}

      <Cart
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
        restaurant={cartRestaurant}
        onCheckout={() => setCheckoutOpen(true)}
      />

      <CheckoutModal
        open={checkoutOpen}
        onClose={closeCheckout}
        total={total}
        onConfirm={handleConfirmOrder}
        success={success}
      />
    </div>
  );
}
