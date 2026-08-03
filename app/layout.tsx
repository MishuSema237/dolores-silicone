import Script from "next/script";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { BackToTop } from "@/components/layout/back-to-top";
import { CartProvider } from "@/lib/context/cart-context";
import { MainContent } from "@/components/layout/main-content";
import { Toaster } from "react-hot-toast";
import WhatsAppFloat from "@/components/ui/whatsapp-float";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const displayFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const parisienne = localFont({
  src: "../public/assets/Parisienne-Regular.ttf",
  variable: "--font-parisienne",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://doloressilicone.com"),
  title: {
    default: "Dolores Silicone | Bebés Reborn de Silicona Hechos a Mano",
    template: "%s | Dolores Silicone",
  },
  description:
    "Bebés reborn de silicona de platino hechos a mano. Cada bebé es una obra maestra única creada con amor y cuidado.",
  keywords: [
    "muñecas reborn de silicona",
    "muñecas reborn",
    "muñecas bebé realistas",
    "muñecas bebé realistas de silicona",
    "bebé de silicona de cuerpo completo",
    "bebés reborn hechos a mano",
    "comprar muñeca reborn online",
    "muñeca de silicona de platino",
    "muñecas reborn de colección",
    "muñecas pintadas a mano",
    "muñecas con peso",
    "muñecas reborn en venta",
    "tienda de muñecas reborn",
    "muñecas reborn terapéuticas",
    "muñecas para terapia de duelo",
    "muñecas para cuidado de demencia",
    "muñecas de consuelo para ansiedad",
    "guía de cuidado de muñecas reborn",
    "muñeca reborn certificada CE",
  ],
  authors: [{ name: "Dolores Silicone" }],
  creator: "Dolores Silicone",
  publisher: "Dolores Silicone",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://doloressilicone.com",
    title: "Dolores Silicone | Bebés Reborn de Silicona Hechos a Mano",
    description: "Experimenta el arte de las muñecas reborn de silicona realistas. Hechas a mano para coleccionistas y familias que buscan consuelo y alegría.",
    siteName: "Dolores Silicone",
    images: [
      {
        url: '/assets/og-logo.png',
        width: 1200,
        height: 630,
        alt: "Dolores Silicone - Muñecas Reborn Realistas",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dolores Silicone | Muñecas Realistas Hechas a Mano",
    description: "La cima del realismo en el arte reborn de silicona. Bebés hechos a mano que se sienten reales en tus brazos.",
    images: ['/assets/og-logo.png'],
    creator: '@doloressilicone',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon1.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${parisienne.variable} bg-white text-black antialiased`}
      >
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <MainContent>
              {children}
            </MainContent>
            <SiteFooter />
          </div>
          <BackToTop />
          <WhatsAppFloat />
          <Toaster position="bottom-right" />
          <Script id="chatway" async src="https://cdn.chatway.app/widget.js?id=B2ZUNT3u7r7k" strategy="lazyOnload" />
        </CartProvider>
      </body>
    </html>
  );
}
