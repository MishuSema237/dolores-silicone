import { getProducts } from "@/lib/utils/db-helpers";
import { ShopClient } from "@/components/shop/shop-client";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Shop",
  description: "Explore our complete collection of handcrafted silicone reborn dolls and accessories — girls, boys, and more. Shop the best reborn dolls.",
  keywords: [
    "buy reborn dolls",
    "silicone doll for sale",
    "reborn dolls for girls",
    "reborn dolls for boys",
    "reborn doll accessories",
    "silicone reborn dolls for sale",
    "handmade dolls",
    "realistic doll shop",
  ],
  openGraph: {
    title: "Shop | Dolores Silicone",
    description: "Explore our complete collection of handcrafted silicone reborn dolls and accessories.",
    url: "https://doloressilicone.com/shop",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Dolores Silicone shop",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop | Dolores Silicone",
    description: "Explore our complete collection of handcrafted silicone reborn dolls and accessories.",
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

