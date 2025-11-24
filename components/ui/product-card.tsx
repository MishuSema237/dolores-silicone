import Link from "next/link";
import Image from "next/image";
import { Button } from "./button";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  slug: string;
}

export function ProductCard({
  id,
  name,
  price,
  imageUrl,
  slug,
}: ProductCardProps) {
  return (
    <div className="p-6 flex flex-col justify-between text-center bg-white hover:-translate-y-1 hover:shadow-xl shadow-sm transition-all duration-300 rounded-2xl overflow-hidden group">
      <div className="w-full h-[300px] mb-6 flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <span className="text-gray-400 text-sm">Baby Doll Photo</span>
        )}
      </div>
      <h3 className="mb-2 text-xl font-serif font-medium text-gray-900 group-hover:text-pink-600 transition-colors">{name}</h3>
      <p className="text-lg font-medium mb-4 text-gray-600">${(price || 0).toFixed(2)}</p>
      <Button variant="outline" href={`/product/${slug}`} className="w-full">
        View Details
      </Button>
    </div>
  );
}

