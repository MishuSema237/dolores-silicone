import { getProducts } from "@/lib/utils/db-helpers";
import { ShopClient } from "@/components/shop/shop-client";
import type { Metadata } from "next";

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "Tienda",
  description: "Explora nuestra colección completa de muñecas reborn de silicona hechas a mano y accesorios — niñas, niños y más. Compra las mejores muñecas reborn.",
  keywords: [
    "comprar muñecas reborn",
    "muñeca de silicona en venta",
    "muñecas reborn niñas",
    "muñecas reborn niños",
    "accesorios para muñecas reborn",
    "muñecas reborn de silicona en venta",
    "muñecas hechas a mano",
    "tienda de muñecas realistas",
  ],
  openGraph: {
    title: "Tienda | Dolores Silicone",
    description: "Explora nuestra colección completa de muñecas reborn de silicona hechas a mano y accesorios.",
    url: "https://doloressilicone.com/shop",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Tienda Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tienda | Dolores Silicone",
    description: "Explora nuestra colección completa de muñecas reborn de silicona hechas a mano y accesorios.",
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

