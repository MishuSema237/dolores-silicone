"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { notFound, useParams } from "next/navigation";
import Link from "next/link";
import { ClearCartOnMount } from "@/components/cart/clear-cart-on-mount";
import { PrintButton } from "@/components/order/print-button";
import { FaCopy, FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";
import { WHATSAPP } from "@/lib/constants";

export default function OrderConfirmationPage() {
  const params = useParams();
  const reference = params.reference as string;
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${reference.toUpperCase()}`);
        if (!response.ok) {
          notFound();
        }
        const data = await response.json();
        setOrder(data);
      } catch (error) {
        console.error("Error fetching order:", error);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [reference]);

  const handleCopyReference = async () => {
    try {
      await navigator.clipboard.writeText(order.orderReference);
      setCopied(true);
      toast.success("Order reference copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast.error("Failed to copy");
    }
  };

  if (loading) {
    return (
      <div className="w-full max-w-viewport mx-auto px-4 flex items-center justify-center py-20">
        <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!order) {
    notFound();
  }

  const orderItems = order.items;
  const total = order.payment.totalAmount;

  return (
    <div className="w-full max-w-viewport mx-auto px-4 pt-4 md:pt-8 print:max-w-none">
      <ClearCartOnMount />

      <div className="max-w-3xl mx-auto text-center print:text-left">
        {/* Success Icon/Message */}
        <div className="mb-8 print:hidden">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-12 h-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-500 mb-2">
            Thank you for your order request. We've received it and will contact
            you shortly.
          </p>
        </div>

        {/* Print Header */}
        <div className="hidden print:block mb-8 text-center">
          <div className="flex justify-center mb-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/owners-logo/Dolores Silicone Logo.png"
              alt="Dolores Silicone Logo"
              className="h-24 w-24 object-cover rounded-full"
            />
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Receipt</h1>
          <p className="text-gray-500">Dolores Silicone</p>
        </div>

        {/* Order Details */}
        <div className="bg-gray-100 p-8 border border-gray-300 text-left mb-8 print:bg-white print:border-none print:p-0">
          <h2 className="mb-6 text-center print:text-left print:text-2xl">Order Details</h2>

          <div className="mb-6">
            <p className="font-semibold mb-2">Order Reference:</p>
            <div className="flex items-center gap-3">
              <p className="text-xl font-bold mb-0">{order.orderReference}</p>
              <button
                onClick={handleCopyReference}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors print:hidden"
                aria-label="Copy order reference"
              >
                {copied ? (
                  <FaCheck className="text-green-600" />
                ) : (
                  <FaCopy className="text-gray-600" />
                )}
              </button>
            </div>
          </div>

          <div className="mb-6">
            <p className="font-semibold mb-2">Items:</p>
            <ul className="space-y-2">
              {orderItems.map((item: any, index: number) => (
                <li key={index} className="flex justify-between border-b border-gray-200 pb-2 last:border-0">
                  <span>
                    {item.name} (Qty: {item.quantity})
                  </span>
                  <span className="font-medium">
                    £{(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-gray-300 pt-4 mb-6">
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Subtotal</span>
              <span>£{orderItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-600 mb-2">
              <span>Shipping</span>
              <span>£{(total - orderItems.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0)).toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-xl border-t border-gray-200 pt-2">
              <span>Total</span>
              <span>£{total.toFixed(2)}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 print:grid-cols-2">
            <div className="mb-6">
              <p className="font-semibold mb-2">Shipping Address:</p>
              <p className="text-gray-700">
                {order.shipping.address}
                <br />
                {order.shipping.city}
                {order.shipping.state && `, ${order.shipping.state}`}{" "}
                {order.shipping.zipCode}
                <br />
                {order.shipping.country}
              </p>
            </div>

            <div className="mb-6">
              <p className="font-semibold mb-2">Payment Method:</p>
              <p className="text-gray-700">{order.payment.preferredMethod}</p>
            </div>
          </div>

          <div className="bg-purple-50 p-4 border border-purple-200 rounded print:hidden">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Next Steps:</strong> We will contact you at{" "}
              {order.customer.email} within 24 hours with payment details. No
              immediate payment is required.
            </p>
            <a
              href={`${WHATSAPP.link}?text=${encodeURIComponent(`Hi! I just placed order ${order.orderReference}. I have a question.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#25D366] hover:underline font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Need help? Chat with us on WhatsApp
            </a>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center print:hidden">
          <Button href="/shop">Continue Shopping</Button>
          <PrintButton />
          <Button variant="outline" href="/">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}

