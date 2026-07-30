import { getProducts } from "@/lib/utils/db-helpers";
import { ShopClient } from "@/components/shop/shop-client";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse our complete collection of handcrafted silicone reborn babies and accessories — girls, boys, and more. Shop UK's finest reborn dolls.",
  keywords: [
    "shop reborn baby dolls",
    "buy silicone baby doll UK",
    "reborn baby girls",
    "reborn baby boys",
    "reborn doll accessories",
    "silicone reborn dolls for sale",
    "handcrafted baby dolls UK",
    "lifelike baby dolls shop",
  ],
  openGraph: {
    title: "Shop | Dolores Silicone",
    description: "Browse our complete collection of handcrafted silicone reborn babies and accessories.",
    url: "https://doloressilicone.com/shop",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Dolores Silicone Shop",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Dolores Silicone",
    description: "Browse our complete collection of handcrafted silicone reborn babies and accessories.",
    images: ["/assets/og-logo.png"],
  },
};

export default async function ShopPage() {
  let products = [];
  try {
    if (process.env.MONGODB_URI) {
      products = await getProducts({ status: "active" });
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }

  return <ShopClient initialProducts={products} />;
}

