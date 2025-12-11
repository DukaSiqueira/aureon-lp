import type { Metadata, Viewport } from "next";
import "./globals.css";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { inter, workSans } from "@/lib/fonts";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aureon-barbearia.com.br';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Aureon Barbearia",
  description: "Experiência premium em cortes e cuidados pessoais. Agende seu horário rápido e fácil. A melhor barbearia da região!",
  keywords: ["barbearia", "corte de cabelo", "barba", "estilo", "premium", "agendamento"],
  authors: [{ name: "Aureon Barbearia" }],
  icons: {
    icon: '/selo-azul.png',
    apple: '/selo-azul.png',
  },
  openGraph: {
    title: "Aureon Barbearia - Seu Melhor Estilo",
    description: "Experiência premium em cortes e cuidados pessoais. Agende seu horário rápido e fácil. A melhor barbearia da região!",
    type: "website",
    locale: "pt_BR",
    siteName: "Aureon Barbearia",
    url: baseUrl,
    images: [
      {
        url: "/selo-azul.png",
        width: 1200,
        height: 630,
        alt: "Aureon Barbearia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aureon Barbearia - Seu Melhor Estilo",
    description: "Experiência premium em cortes e cuidados pessoais",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${workSans.variable}`}>
      <head>
        <SchemaMarkup />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        {children}
      </body>
    </html>
  );
}
