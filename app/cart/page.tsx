"use client";

import { useCart } from "@/lib/context/cart-context";
import { CartItemComponent } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, getTotal, clearCart } = useCart();
  const subtotal = getTotal();

  if (items.length === 0) {
    return (
      <div className="w-full max-w-viewport mx-auto text-center py-8 md:py-12">
        <h1 className="mb-4 text-2xl md:text-4xl">Your Cart is Empty</h1>
        <p className="mb-8 text-gray-500 text-sm md:text-base">
          Start shopping to add items to your cart.
        </p>
        <Button href="/shop" className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl">Continue Shopping</Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-viewport mx-auto">
      <h1 className="mb-6 md:mb-12 text-2xl md:text-4xl font-serif">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Cart Items */}
        <div className="lg:col-span-7">
          <div className="space-y-0">
            {items.map((item, index) => (
              <CartItemComponent key={`${item.id}-${index}`} item={item} />
            ))}
          </div>

          {/* Subtotal */}
          <div className="text-right font-medium pt-4 border-t border-gray-300 mt-4">
            <p className="mb-0">Subtotal: ${subtotal.toFixed(2)}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4 md:mt-8 flex-col sm:flex-row ">
            <Button variant="outline" onClick={clearCart} className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-base">
              Clear Cart
            </Button>
            <Button variant="outline" href="/shop" className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-base">
              Continue Shopping
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-purple-50 p-6 border border-purple-200 sticky top-6 rounded-xl shadow-sm">
            <h2 className="mb-6">Order Summary</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 mt-4">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 mb-4">
              <strong>Note:</strong> A deposit will be required after order
              confirmation. We will contact you with payment details.
            </p>

            <Button href="/order" className="w-full h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-lg font-bold">
              Proceed to Order
            </Button>

            {/* Trust Badges */}
            <div className="flex justify-center items-center gap-6 mt-6 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="flex flex-col items-center gap-1">
                <div className="relative h-8 w-24">
                  <Image
                    src="/assets/fortinet logo.png"
                    alt="Fortinet Secured"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="relative h-8 w-24">
                  <Image
                    src="/assets/cloudflare logo.png"
                    alt="Cloudflare Protected"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/track-order" className="text-sm text-purple-600 hover:text-purple-700 ">
                Track an existing order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

