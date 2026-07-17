import { Restaurant, Menu, CategoryName } from "./types";

/**
 * Dados 100% estáticos (mock). Nenhuma chamada de rede ou banco de dados.
 * Substitua este arquivo por uma chamada de API/DB quando evoluir o projeto.
 */

export const CATEGORY_ORDER: CategoryName[] = [
  "Lanches",
  "Pizzas",
  "Bebidas",
  "Sobremesas",
];

export const RESTAURANTS: Restaurant[] = [
  {
    id: "r1",
    name: "Fogo & Farofa",
    category: "Brasileira · Lanches",
    logo: "🔥",
    banner: "linear-gradient(135deg,#5C2A52,#211A1D)",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: 6.99,
    hours: "Seg a Dom · 11h às 23h",
    open: true,
  },
  {
    id: "r2",
    name: "Pizzaria Bella Nonna",
    category: "Pizzas · Italiana",
    logo: "🍕",
    banner: "linear-gradient(135deg,#8a3b1f,#211A1D)",
    rating: 4.6,
    deliveryTime: "35-50 min",
    deliveryFee: 8.5,
    hours: "Ter a Dom · 18h às 00h",
    open: true,
  },
  {
    id: "r3",
    name: "Doce Ponto",
    category: "Sobremesas · Açaí",
    logo: "🍨",
    banner: "linear-gradient(135deg,#a1673a,#211A1D)",
    rating: 4.9,
    deliveryTime: "20-30 min",
    deliveryFee: 4.99,
    hours: "Todos os dias · 10h às 22h",
    open: false,
  },
  {
    id: "r4",
    name: "Sumo Bar",
    category: "Sucos · Bebidas",
    logo: "🥤",
    banner: "linear-gradient(135deg,#2e6b4f,#211A1D)",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: 3.99,
    hours: "Seg a Sáb · 8h às 20h",
    open: true,
  },
];

export const MENU: Record<string, Menu> = {
  r1: {
    Lanches: [
      {
        id: "p1",
        name: "Fogo Burger",
        desc: "Blend 180g, queijo prato, bacon crocante e molho da casa.",
        price: 28.9,
        emoji: "🍔",
      },
      {
        id: "p2",
        name: "Farofa Dog",
        desc: "Salsicha artesanal, farofa crocante e vinagrete.",
        price: 19.5,
        emoji: "🌭",
      },
      {
        id: "p3",
        name: "Sanduíche de Costela",
        desc: "Costela desfiada, cebola caramelizada e barbecue.",
        price: 26.0,
        emoji: "🥪",
      },
    ],
    Pizzas: [
      {
        id: "p4",
        name: "Pizza Calabresa",
        desc: "Molho de tomate, calabresa fatiada e cebola roxa.",
        price: 42.0,
        emoji: "🍕",
      },
    ],
    Bebidas: [
      {
        id: "p5",
        name: "Limonada Suíça",
        desc: "Limão, leite condensado e gelo.",
        price: 9.9,
        emoji: "🍋",
      },
      {
        id: "p6",
        name: "Refrigerante Lata",
        desc: "350ml, gelado.",
        price: 6.0,
        emoji: "🥤",
      },
    ],
    Sobremesas: [
      {
        id: "p7",
        name: "Brownie com Sorvete",
        desc: "Brownie quente com bola de sorvete de creme.",
        price: 16.5,
        emoji: "🍫",
      },
    ],
  },
  r2: {
    Pizzas: [
      {
        id: "p8",
        name: "Margherita",
        desc: "Molho de tomate, mussarela de búfala e manjericão.",
        price: 45.0,
        emoji: "🍕",
      },
      {
        id: "p9",
        name: "Quatro Queijos",
        desc: "Mussarela, provolone, parmesão e gorgonzola.",
        price: 49.9,
        emoji: "🍕",
      },
      {
        id: "p10",
        name: "Pepperoni",
        desc: "Molho de tomate, mussarela e pepperoni importado.",
        price: 47.5,
        emoji: "🍕",
      },
    ],
    Lanches: [
      {
        id: "p11",
        name: "Panini Italiano",
        desc: "Presunto de parma, rúcula e queijo brie.",
        price: 24.0,
        emoji: "🥪",
      },
    ],
    Bebidas: [
      {
        id: "p12",
        name: "Suco de Laranja",
        desc: "300ml natural.",
        price: 8.0,
        emoji: "🍊",
      },
    ],
    Sobremesas: [
      {
        id: "p13",
        name: "Tiramisù",
        desc: "Clássico italiano com café e mascarpone.",
        price: 18.0,
        emoji: "🍰",
      },
    ],
  },
  r3: {
    Sobremesas: [
      {
        id: "p14",
        name: "Açaí 500ml",
        desc: "Com granola, banana e leite em pó.",
        price: 22.0,
        emoji: "🍨",
      },
      {
        id: "p15",
        name: "Milkshake de Morango",
        desc: "400ml, cremoso e geladinho.",
        price: 17.5,
        emoji: "🥤",
      },
      {
        id: "p16",
        name: "Petit Gateau",
        desc: "Com sorvete de creme e calda de chocolate.",
        price: 19.9,
        emoji: "🍫",
      },
    ],
    Bebidas: [
      {
        id: "p17",
        name: "Água de Coco",
        desc: "Gelada, 300ml.",
        price: 7.0,
        emoji: "🥥",
      },
    ],
  },
  r4: {
    Bebidas: [
      {
        id: "p18",
        name: "Suco Verde Detox",
        desc: "Couve, maçã, limão e gengibre.",
        price: 13.0,
        emoji: "🥬",
      },
      {
        id: "p19",
        name: "Suco de Melancia",
        desc: "500ml, natural e gelado.",
        price: 11.0,
        emoji: "🍉",
      },
      {
        id: "p20",
        name: "Vitamina de Banana",
        desc: "Banana, leite e aveia.",
        price: 12.5,
        emoji: "🍌",
      },
    ],
    Lanches: [
      {
        id: "p21",
        name: "Wrap Fit de Frango",
        desc: "Frango grelhado, alface e cenoura.",
        price: 21.0,
        emoji: "🌯",
      },
    ],
  },
};
