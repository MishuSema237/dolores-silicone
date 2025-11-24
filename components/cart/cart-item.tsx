"use client";

import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { useCart } from "@/lib/context/cart-context";
import type { CartItem } from "@/lib/context/cart-context";

interface CartItemProps {
  item: CartItem;
}

export function CartItemComponent({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const handleQuantityChange = (delta: number) => {
    const newQuantity = item.quantity + delta;
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center py-4 border-b border-pink-200 gap-4 last:border-b-0 hover:bg-pink-50 transition-colors rounded-lg px-2">
      {/* Image */}
      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 border border-gray-300 flex items-center justify-center overflow-hidden rounded-md">
        {item.imageUrl || (item.images && item.images.length > 0) ? (
          <Image
            src={item.imageUrl || item.images![0]}
            alt={item.name}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-gray-400 text-xs">Product Image</span>
        )}
      </div>

      {/* Details */}
      <div className="flex-grow">
        <p className="font-medium text-black mb-1">{item.name}</p>
        {item.attributes && (
          <p className="text-sm text-gray-500 mb-0">
            {item.attributes.hairColor && `${item.attributes.hairColor} Hair`}
            {item.attributes.hairColor && item.attributes.eyeColor && ", "}
            {item.attributes.eyeColor && `${item.attributes.eyeColor} Eyes`}
            {item.attributes.size && `, ${item.attributes.size}`}
          </p>
        )}
      </div>

      {/* Quantity and Price */}
      <div className="flex items-center gap-2">
        {/* Quantity Control */}
        <div className="flex items-center border border-gray-300 h-8 text-sm">
          <button
            type="button"
            onClick={() => handleQuantityChange(-1)}
            className="bg-transparent border-0 text-black h-full w-8 cursor-pointer p-0 text-base hover:bg-gray-100"
            aria-label="Decrease quantity"
          >
            -
          </button>
          <span className="px-2 border-l border-r border-gray-300 min-w-8 text-center">
            {item.quantity}
          </span>
          <button
            type="button"
            onClick={() => handleQuantityChange(1)}
            className="bg-transparent border-0 text-black h-full w-8 cursor-pointer p-0 text-base hover:bg-gray-100"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Price */}
        <span className="font-medium text-black min-w-[100px] text-right">
          ${(item.price * item.quantity).toFixed(2)}
        </span>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => removeItem(item.id)}
          className="bg-transparent border-0 text-gray-500 cursor-pointer text-sm ml-2 hover:text-black"
          aria-label="Remove item"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

