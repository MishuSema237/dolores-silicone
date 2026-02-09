"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShoppingCart, FaEye } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/context/cart-context";
import toast from "react-hot-toast";

interface AccessoryCardProps {
    id: string;
    name: string;
    price: number;
    imageUrl?: string;
    slug: string;
    description?: string;
}

export function AccessoryCard({
    id,
    name,
    price,
    imageUrl,
    slug,
    description,
}: AccessoryCardProps) {
    const { addItem } = useCart();

    const handleAddToCart = (e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        addItem({
            id,
            name,
            price,
            slug,
            imageUrl,
            category: "accessory",
        });
        toast.success(`${name} added to cart`);
    };

    return (
        <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Link href={`/product/${slug}`} className="block relative w-full h-full">
                    {imageUrl ? (
                        <Image
                            src={imageUrl}
                            alt={name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-300">
                            No Image
                        </div>
                    )}
                </Link>

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 pointer-events-none">
                    <Link href={`/product/${slug}`} className="pointer-events-auto">
                        <button className="bg-white text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-purple-600 hover:text-white">
                            <FaEye />
                        </button>
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="bg-white text-gray-900 p-3 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-purple-600 hover:text-white pointer-events-auto"
                    >
                        <FaShoppingCart />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className="p-2 md:p-5">
                <div className="flex justify-between items-start mb-2">
                    <Link href={`/product/${slug}`}>
                        <h3 className="font-serif font-bold text-sm md:text-base text-gray-900 line-clamp-1 group-hover:text-purple-600 transition-colors">
                            {name}
                        </h3>
                    </Link>
                    <span className="font-bold text-purple-600 text-xs md:text-sm hidden min-[450px]:block">
                        ${price.toFixed(0)}
                    </span>
                </div>

                <p className="text-gray-500 text-[10px] md:text-xs mb-4 line-clamp-2 h-8 md:h-10">
                    {description || "Premium accessory for your collection."}
                </p>

                <Button
                    variant="outline"
                    onClick={handleAddToCart}
                    className="hidden min-[450px]:flex w-full border-purple-200 text-purple-600 hover:bg-purple-50 rounded-xl py-2 text-xs font-semibold"
                >
                    Add to Cart
                </Button>

                {/* Mobile (<450px) Layout */}
                <div className="flex min-[450px]:hidden items-center justify-between mt-3">
                    <span className="font-bold text-purple-600 text-sm">
                        ${price.toFixed(0)}
                    </span>
                    <button
                        onClick={handleAddToCart}
                        className="p-2 text-purple-600 hover:bg-purple-50 rounded-full transition-colors"
                        aria-label="Add to cart"
                    >
                        <FaShoppingCart size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
}
