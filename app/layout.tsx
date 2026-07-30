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
    default: "Dolores Silicone | Handcrafted Silicone Reborn Babies",
    template: "%s | Dolores Silicone",
  },
  description:
    "Handcrafted platinum silicone reborn babies. Each baby is a unique masterpiece created with love and care.",
  keywords: [
    "silicone reborn baby dolls UK",
    "reborn baby dolls",
    "realistic baby dolls",
    "lifelike baby dolls",
    "full body silicone baby doll",
    "handcrafted reborn babies UK",
    "buy reborn baby doll online UK",
    "platinum silicone baby doll",
    "collectible reborn dolls",
    "hand-painted baby dolls",
    "weighted baby dolls",
    "reborn dolls for sale UK",
    "reborn baby doll shop",
    "therapeutic reborn dolls",
    "grief therapy dolls",
    "dementia care dolls",
    "anxiety comfort dolls",
    "reborn doll care guide",
    "CE certified reborn doll",
  ],
  authors: [{ name: "Dolores Silicone" }],
  creator: "Dolores Silicone",
  publisher: "Dolores Silicone",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doloressilicone.com",
    title: "Dolores Silicone | Handcrafted Silicone Reborn Babies",
    description: "Experience the artistry of lifelike silicone reborn dolls. Handcrafted for collectors and families seeking comfort and joy.",
    siteName: "Dolores Silicone",
    images: [
      {
        url: '/assets/og-logo.png',
        width: 1200,
        height: 630,
        alt: "Dolores Silicone - Lifelike Reborn Dolls",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dolores Silicone | Handcrafted Lifelike Dolls",
    description: "The peak of realism in silicone reborn art. Handcrafted babies that feel real in your arms.",
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
    <html lang="en">
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
        </CartProvider>
      </body>
    </html>
  );
}
