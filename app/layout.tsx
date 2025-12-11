import type { Metadata } from "next";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "Aureon Barbearia",
  description: "Experiência premium em cortes e cuidados pessoais. Agende seu horário rápido e fácil. A melhor barbearia da região!",
  keywords: ["barbearia", "corte de cabelo", "barba", "estilo", "premium", "agendamento"],
  authors: [{ name: "Barbearia" }],
  icons: {
    icon: '/selo-azul.png',
    apple: '/selo-azul.png',
  },
  openGraph: {
    title: "Barbearia - Seu Melhor Estilo",
    description: "Experiência premium em cortes e cuidados pessoais",
    type: "website",
    locale: "pt_BR",
    siteName: "Barbearia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia - Seu Melhor Estilo",
    description: "Experiência premium em cortes e cuidados pessoais",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <SchemaMarkup />
      </head>
      <body>{children}</body>
    </html>
  );
}
