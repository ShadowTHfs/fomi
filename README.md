# fomi. — demonstração visual de delivery

MVP visual (frontend) de um sistema de delivery de restaurantes, construído com
**Next.js 15 (App Router)**, **React**, **TypeScript**, **Tailwind CSS** e
componentes no estilo **shadcn/ui**. Todos os dados são estáticos (mock), sem
autenticação, banco de dados ou APIs externas.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Deploy no Vercel

### Opção 1 — pelo site (mais simples)
1. Suba esta pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Acesse [vercel.com/new](https://vercel.com/new) e importe o repositório.
3. O Vercel detecta automaticamente que é um projeto Next.js — não é preciso
   mudar nenhuma configuração (build command `next build`, output padrão).
4. Clique em **Deploy**. Em ~1 minuto o link estará no ar.

### Opção 2 — pela CLI
```bash
npm install -g vercel
vercel        # segue o assistente para criar o projeto
vercel --prod # publica em produção
```

Não é necessário configurar nenhuma variável de ambiente — o projeto não usa
banco de dados nem serviços externos.

## Estrutura do projeto

```
app/
  layout.tsx        # layout raiz + metadata
  page.tsx           # orquestra o fluxo: lista → restaurante → carrinho → checkout
  globals.css        # Tailwind + fontes (Baloo 2 / Inter)
components/
  Header.tsx          # logo, busca e ícone do carrinho
  RestaurantCard.tsx   # card da lista de restaurantes
  RestaurantBanner.tsx # banner + info do restaurante selecionado
  RestaurantPage.tsx   # composição: banner + categorias + produtos
  CategorySection.tsx  # abas de categoria (Lanches, Pizzas, Bebidas, Sobremesas)
  ProductCard.tsx       # card de produto com botão "Adicionar"
  Cart.tsx               # carrinho lateral (quantidade, remover, totais)
  CheckoutModal.tsx      # formulário de finalização + mensagem de sucesso
  ui/
    button.tsx          # primitivo estilo shadcn/ui
    input.tsx            # primitivo estilo shadcn/ui
lib/
  types.ts               # tipos compartilhados (Restaurant, Product, CartItem...)
  mock-data.ts             # restaurantes e cardápios mockados
  utils.ts                  # cn() e formatação de moeda (currency)
```

## Próximos passos (fora do escopo deste MVP)

- Autenticação (NextAuth/Auth.js)
- Banco de dados (Prisma + Postgres)
- API real para restaurantes, produtos e pedidos
- Dashboard administrativo / área do restaurante / área do entregador
- Persistência real do carrinho e dos pedidos
