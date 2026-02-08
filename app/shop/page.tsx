import { getProducts } from "@/lib/utils/db-helpers";
import { ShopClient } from "@/components/shop/shop-client";

export const metadata = {
  title: "Shop - Dolores Silicone",
  description: "Browse our complete collection of handcrafted silicone reborn babies and accessories",
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

