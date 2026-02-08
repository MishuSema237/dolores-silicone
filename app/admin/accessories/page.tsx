"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

export default function ManageAccessoriesPage() {
    const router = useRouter();
    const [accessories, setAccessories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchAccessories = async () => {
        try {
            // Updated API call to filter by category if the API supports it, 
            // otherwise filter client-side. Assuming we might need to update the API too
            // but for now let's see what /api/admin/products returns.
            const res = await fetch("/api/admin/products");
            if (res.ok) {
                const data = await res.json();
                // Filter for accessories only
                setAccessories(data.filter((p: any) => p.category === "accessory"));
            }
        } catch (error) {
            console.error("Failed to fetch accessories:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchAccessories();
    }, []);

    const handleDelete = async (item: any) => {
        if (!confirm(`Are you sure you want to delete "${item.name}"?`)) return;

        try {
            const res = await fetch(`/api/admin/products?id=${item._id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                fetchAccessories(); // Refresh list
            } else {
                alert("Failed to delete accessory");
            }
        } catch (error) {
            console.error("Error deleting accessory:", error);
        }
    };

    const columns = [
        {
            header: "Image",
            accessor: (item: any) => (
                <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100">
                    {item.images?.[0] && (
                        <Image
                            src={item.images[0]}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    )}
                </div>
            ),
        },
        {
            header: "Name",
            accessor: (item: any) => (
                <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.slug}</div>
                </div>
            ),
        },
        {
            header: "Price",
            accessor: (item: any) => (
                <span className="font-medium">${item.price.toFixed(2)}</span>
            ),
        },
        {
            header: "Status",
            accessor: (item: any) => (
                <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
          ${item.status === "active"
                            ? "bg-green-100 text-green-800"
                            : item.status === "sold_out"
                                ? "bg-gray-100 text-gray-800"
                                : "bg-yellow-100 text-yellow-800"
                        }`}
                >
                    {item.status.replace("_", " ")}
                </span>
            ),
        },
    ];

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
                        Accessories
                    </h1>
                    <p className="text-gray-500">Manage your premium boutique items and accessories.</p>
                </div>
                <Link href="/admin/accessories/add">
                    <Button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white">
                        <FaPlus /> Add Accessory
                    </Button>
                </Link>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
                {isLoading ? (
                    <div className="p-8 text-center text-gray-500">Loading accessories...</div>
                ) : accessories.length > 0 ? (
                    <DataTable
                        data={accessories}
                        columns={columns}
                        keyField="_id"
                        onDelete={handleDelete}
                        onEdit={(item) => router.push(`/admin/products/edit/${item._id}`)}
                        isLoading={isLoading}
                    />
                ) : (
                    <div className="p-12 text-center">
                        <p className="text-gray-500 mb-4">No accessories found.</p>
                        <Link href="/admin/accessories/add">
                            <Button variant="outline">Add your first accessory</Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
