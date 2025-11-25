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
    <div className="relative group w-full aspect-[3/4] rounded-[32px] p-4 overflow-hidden border-4 border-white shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-blue-50 opacity-80" />

      {/* Wishlist Icon */}
      <button className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/60 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </button>

      {/* Product Image */}
      <div className="absolute inset-0 top-0 bottom-32 z-10 flex items-center justify-center p-6">
        <Link href={`/product/${slug}`} className="relative w-full h-full block">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              No Image
            </div>
          )}
        </Link>
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/40 to-transparent backdrop-blur-[2px] z-20 p-6 flex flex-col justify-end">
        <Link href={`/product/${slug}`} className="block">
          <h3 className="text-xl font-bold text-white drop-shadow-md mb-1 truncate">{name}</h3>
          <p className="text-white/90 text-sm mb-4 line-clamp-2 drop-shadow-sm">
            Handcrafted silicone reborn baby with lifelike details.
          </p>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-white drop-shadow-md">
            ${(price || 0).toFixed(0)}
          </span>
          <Button
            href={`/product/${slug}`}
            className="bg-white text-gray-900 hover:bg-gray-50 border-none rounded-full px-8 py-2 h-10 font-semibold shadow-lg"
          >
            Buy
          </Button>
        </div>
      </div>
    </div>
  );
}

