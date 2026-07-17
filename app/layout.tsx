import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "fomi. — peça sem sair de casa",
  description:
    "Demonstração visual de um sistema de delivery de restaurantes — MVP em Next.js, React, TypeScript e Tailwind CSS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="font-body text-ink antialiased">{children}</body>
    </html>
  );
}
