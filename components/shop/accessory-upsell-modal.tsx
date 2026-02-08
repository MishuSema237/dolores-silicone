"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCart } from "@/lib/context/cart-context";
import toast from "react-hot-toast";

interface Accessory {
    _id: string;
    name: string;
    price: number;
    images: string[];
    description: string;
}

interface AccessoryUpsellModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: {
        id: string;
        name: string;
    };
}

export function AccessoryUpsellModal({ isOpen, onClose, product }: AccessoryUpsellModalProps) {
    const [accessories, setAccessories] = useState<Accessory[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const { addItem } = useCart();

    useEffect(() => {
        if (isOpen) {
            const fetchAccessories = async () => {
                try {
                    const res = await fetch("/api/admin/products");
                    if (res.ok) {
                        const data = await res.json();
                        // Filter only accessories that are active
                        const filtered = data.filter((p: any) => p.category === "accessory" && p.status === "active");
                        setAccessories(filtered);
                    }
                } catch (error) {
                    console.error("Failed to fetch accessories:", error);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchAccessories();
        }
    }, [isOpen]);

    const handleAddAccessory = (accessory: Accessory) => {
        addItem({
            id: accessory._id,
            name: accessory.name,
            price: accessory.price,
            slug: accessory.name.toLowerCase().replace(/ /g, "-"), // Simple slug fallback
            imageUrl: accessory.images[0],
            parentProductId: product.id, // Linking to the baby
        });
        toast.success(`Added ${accessory.name} for ${product.name}!`);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Complete Your Order"
        >
            <div className="space-y-6">
                <div className="text-center">
                    <p className="text-gray-600 mb-6">
                        Would you like to add some premium accessories for <strong>{product.name}</strong>?
                    </p>
                </div>

                {isLoading ? (
                    <div className="text-center py-8 text-gray-500">Loading accessories...</div>
                ) : accessories.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto p-2">
                        {accessories.map((acc) => (
                            <div
                                key={acc._id}
                                className="group relative flex flex-col bg-gray-50 rounded-xl p-3 border border-gray-100 hover:border-purple-200 transition-all"
                            >
                                <div className="relative h-32 w-full mb-3 rounded-lg overflow-hidden">
                                    <Image
                                        src={acc.images[0]}
                                        alt={acc.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{acc.name}</h4>
                                    <p className="text-sm font-bold text-purple-600 mb-2">
                                        ${acc.price.toFixed(2)}
                                    </p>
                                </div>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => handleAddAccessory(acc)}
                                    className="w-full mt-auto text-xs py-1 h-8"
                                >
                                    Add to Cart
                                </Button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-gray-500 italic">
                        No accessories currently available.
                    </div>
                )}

                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100 px-2 lg:px-0">
                    <Button href="/cart" className="w-full">
                        Proceed to Checkout
                    </Button>
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="w-full text-gray-500 hover:text-gray-900"
                    >
                        No thanks, just the baby
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
