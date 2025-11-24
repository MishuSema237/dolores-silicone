"use client";

import { useCart } from "@/lib/context/cart-context";
import { Button } from "@/components/ui/button";
import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";

interface AddToCartButtonProps {
  product: {
    id?: string;
    _id?: string;
    name: string;
    price: number;
    slug: string;
    imageUrl?: string;
    images?: string[];
  };
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addItem } = useCart();
  const router = useRouter();

  const handleAddToCart = () => {
    addItem({
      id: product.id || product._id || "",
      name: product.name,
      price: product.price,
      slug: product.slug,
      imageUrl: product.imageUrl || (product.images && product.images[0]),
      images: product.images,
    });
    // Optionally redirect to cart or show a toast notification
    // router.push("/cart");
  };

  return (
    <Button className="w-full mb-8" onClick={handleAddToCart}>
      <FaShoppingCart className="mr-2" />
      Add to Cart
    </Button>
  );
}

