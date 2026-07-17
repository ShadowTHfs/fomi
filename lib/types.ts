export type CategoryName = "Lanches" | "Pizzas" | "Bebidas" | "Sobremesas";

export interface Restaurant {
  id: string;
  name: string;
  category: string;
  logo: string; // emoji usado como logo ilustrativo
  banner: string; // gradiente CSS usado como banner ilustrativo
  rating: number;
  deliveryTime: string;
  deliveryFee: number;
  hours: string;
  open: boolean;
}

export interface Product {
  id: string;
  name: string;
  desc: string;
  price: number;
  emoji: string;
}

export type Menu = Partial<Record<CategoryName, Product[]>>;

export interface CartItem extends Product {
  qty: number;
}
