import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AGROFIT - Conectando Agricultores con Inversión de Impacto",
  description: "Plataforma que conecta pequeños y medianos agricultores sostenibles con fondos de inversión de impacto social, ambiental y financiero.",
  keywords: ["agricultura sostenible", "inversión de impacto", "ESG", "palma africana", "financiamiento agrícola"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
