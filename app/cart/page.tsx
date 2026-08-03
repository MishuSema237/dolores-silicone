"use client";

import { useCart } from "@/lib/context/cart-context";
import { CartItemComponent } from "@/components/cart/cart-item";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function CartPage() {
  const { items, getTotal, clearCart } = useCart();
  const subtotal = getTotal();

  if (items.length === 0) {
    return (
      <div className="w-full max-w-viewport mx-auto px-4 text-center py-8 md:py-12">
        <h1 className="mb-4 text-2xl md:text-4xl">Tu Carrito está Vacío</h1>
        <p className="mb-8 text-gray-500 text-sm md:text-base">
          Empieza a comprar para añadir artículos a tu carrito.
        </p>
        <Button href="/shop" className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl">Seguir Comprando</Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-viewport mx-auto px-4 pt-4 md:pt-8">
      <h1 className="mb-6 md:mb-12 text-2xl md:text-4xl font-serif">Tu Carrito</h1>

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
            <p className="mb-0">Subtotal: {formatPrice(subtotal)}</p>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-4 md:mt-8 flex-col sm:flex-row ">
            <Button variant="outline" onClick={clearCart} className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-base">
              Vaciar Carrito
            </Button>
            <Button variant="outline" href="/shop" className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-base">
              Seguir Comprando
            </Button>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-purple-50 p-6 border border-purple-200 sticky top-6 rounded-xl shadow-sm">
            <h2 className="mb-6">Resumen del Pedido</h2>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Envío</span>
                <span>Calculado al pagar</span>
              </div>
            </div>

            <div className="border-t border-gray-300 pt-4 mt-4">
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6 mb-4">
              <strong>Nota:</strong> Se requerirá un depósito después de la
              confirmación del pedido. Te contactaremos con los datos de pago.
            </p>

            <Button href="/order" className="w-full h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl text-sm md:text-lg font-bold">
              Continuar al Pedido
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
                Rastrear un pedido existente
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

