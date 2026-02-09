"use client";

import { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { FaSearch, FaBoxOpen, FaShippingFast, FaCheckCircle } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

function TrackOrderContent() {
    const searchParams = useSearchParams();
    const [orderReference, setOrderReference] = useState(searchParams.get("ref") || "");
    const [email, setEmail] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [order, setOrder] = useState<any | null>(null);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");
        setOrder(null);

        try {
            const res = await fetch("/api/track-order", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderReference, email }),
            });

            const data = await res.json();

            if (res.ok) {
                setOrder(data);
            } else {
                setError(data.error || "Failed to find order");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "completed": return <FaCheckCircle className="text-green-500 text-4xl" />;
            case "shipped": return <FaShippingFast className="text-blue-500 text-4xl" />;
            default: return <FaBoxOpen className="text-purple-500 text-4xl" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50/50 py-10 px-4 md:py-20">
            <div className="max-w-xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-3">Track Your Order</h1>
                    <p className="text-sm text-gray-500 max-w-sm mx-auto">
                        Enter your order reference and email address to check the status of your shipment.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8 mb-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <FormInput
                                label="Order Reference"
                                value={orderReference}
                                onChange={(e) => setOrderReference(e.target.value.toUpperCase())}
                                placeholder="e.g. DS20260001"
                                required
                            />
                            <FormInput
                                label="Email Address"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Used during checkout"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full h-11 px-6 rounded-lg text-sm font-semibold tracking-wide uppercase transition-all shadow-md hover:shadow-lg" disabled={isLoading}>
                            {isLoading ? "Searching..." : "Track Order"}
                        </Button>
                    </form>

                    {error && (
                        <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-lg text-center text-sm border border-red-100">
                            {error}
                        </div>
                    )}
                </div>

                {order && (
                    <div className="bg-white rounded-xl shadow-xl border border-purple-100 p-6 md:p-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-indigo-500"></div>

                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-dashed border-gray-200 pb-6 mb-6 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-gray-50 rounded-full">
                                    {getStatusIcon(order.status)}
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold text-gray-900 tracking-tight">Order {order.orderReference}</h2>
                                    <p className="text-sm text-gray-500 capitalize">Status: <span className="font-semibold text-purple-700">{order.status.replace("_", " ")}</span></p>
                                </div>
                            </div>
                            <div className="text-left md:text-right">
                                <p className="text-xs text-gray-400 uppercase tracking-wider">Ordered on</p>
                                <p className="font-medium text-gray-700">{new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>

                        <div className="space-y-6 mb-8">
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Shipping To</h3>
                                <p className="text-gray-700 font-medium">{order.shipping.city}, {order.shipping.country}</p>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Items</h3>
                                <ul className="space-y-3">
                                    {order.items.map((item: any, idx: number) => (
                                        <li key={idx} className="flex justify-between items-center text-sm p-3 bg-gray-50 rounded-lg border border-gray-100">
                                            <span className="font-medium text-gray-700">{item.name}</span>
                                            <span className="text-gray-500 bg-white px-2 py-1 rounded shadow-sm text-xs font-bold">x{item.quantity}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {order.statusHistory.length > 0 && (
                            <div className="bg-gray-50/50 rounded-lg p-4 border border-gray-100">
                                <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">Timeline</h3>
                                <div className="space-y-0">
                                    {order.statusHistory.map((history: any, idx: number) => (
                                        <div key={idx} className="flex gap-4 relative pb-6 last:pb-0">
                                            <div className="flex flex-col items-center">
                                                <div className={`w-3 h-3 rounded-full ${idx === 0 ? "bg-purple-600 ring-4 ring-purple-100" : "bg-gray-300"}`} />
                                                {idx < order.statusHistory.length - 1 && (
                                                    <div className="w-0.5 h-full bg-gray-200 absolute top-3 left-[5px]" />
                                                )}
                                            </div>
                                            <div className="relative -top-1">
                                                <p className="font-semibold text-sm text-gray-800 capitalize">{history.status.replace("_", " ")}</p>
                                                <p className="text-xs text-gray-500">{new Date(history.timestamp).toLocaleString()}</p>
                                                {history.note && <p className="text-xs text-gray-600 mt-1 italic">{history.note}</p>}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default function TrackOrderPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
            </div>
        }>
            <TrackOrderContent />
        </Suspense>
    );
}
