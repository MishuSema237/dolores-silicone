"use client";

import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";

interface PaymentMethod {
    _id: string;
    name: string;
    details: string;
    isActive: boolean;
}

export default function PaymentSettingsPage() {
    const [methods, setMethods] = useState<PaymentMethod[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        details: "",
    });

    useEffect(() => {
        fetchMethods();
    }, []);

    const fetchMethods = async () => {
        try {
            const res = await fetch("/api/admin/payment-methods");
            const data = await res.json();
            setMethods(data);
        } catch (err) {
            console.error("Failed to fetch methods", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/admin/payment-methods", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormData({ name: "", details: "" });
                fetchMethods();
            }
        } catch (err) {
            console.error("Failed to add method", err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-serif font-bold mb-8">Payment Methods</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* List */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-xl font-bold mb-4">Active Methods</h2>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <div className="space-y-4">
                            {methods.map((method) => (
                                <div key={method._id} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                                    <h3 className="font-bold">{method.name}</h3>
                                    <p className="text-sm text-gray-600 mt-1 whitespace-pre-wrap">{method.details}</p>
                                    <div className="mt-2 flex items-center gap-2">
                                        <span className={`text-xs px-2 py-1 rounded-full ${method.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {method.isActive ? 'Active' : 'Inactive'}
                                        </span>
                                    </div>
                                </div>
                            ))}
                            {methods.length === 0 && <p className="text-gray-500">No payment methods configured.</p>}
                        </div>
                    )}
                </div>

                {/* Add Form */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
                    <h2 className="text-xl font-bold mb-4">Add New Method</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <FormInput
                            id="name"
                            name="name"
                            label="Method Name"
                            placeholder="e.g., Bank Transfer"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Payment Details (Email Template)</label>
                            <textarea
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                                rows={6}
                                required
                                placeholder="Enter bank details or payment instructions..."
                                value={formData.details}
                                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                            />
                            <p className="text-xs text-gray-500 mt-1">This text will be sent to customers when they choose this method.</p>
                        </div>

                        <Button type="submit" className="w-full" disabled={isSubmitting}>
                            {isSubmitting ? "Adding..." : "Add Method"}
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
}
