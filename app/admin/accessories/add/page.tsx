"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/form-input";
import { ImageUpload } from "@/components/admin/image-upload";

export default function AddAccessoryPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        slug: "",
        price: "",
        description: "",
        detailedDescription: "",
        images: [] as string[],
        category: "accessory",
        status: "active",
        featured: false,
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch("/api/admin/products", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    price: parseFloat(formData.price),
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.error || "Failed to create accessory");
            }

            router.push("/admin/accessories");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Add New Accessory</h1>
                <p className="text-gray-500 mt-1">Create a non-baby item for your boutique collection.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        id="name"
                        name="name"
                        label="Accessory Name"
                        placeholder="e.g. Silk Blanket, Pacifier"
                        required
                        value={formData.name}
                        onChange={(e) => {
                            const name = e.target.value;
                            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
                            setFormData({ ...formData, name, slug });
                        }}
                    />

                    <FormInput
                        id="slug"
                        name="slug"
                        label="Slug (URL friendly)"
                        required
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput
                        id="price"
                        name="price"
                        label="Price ($)"
                        type="number"
                        step="0.01"
                        required
                        value={formData.price}
                        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    />

                    <FormSelect
                        id="status"
                        label="Status"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                        options={[
                            { value: "active", label: "Active" },
                            { value: "inactive", label: "Inactive" },
                            { value: "sold_out", label: "Sold Out" },
                        ]}
                    />
                </div>

                <FormTextarea
                    id="description"
                    label="Short Description"
                    placeholder="Briefly describe the accessory..."
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                />

                <FormTextarea
                    id="detailedDescription"
                    label="Detailed Product Information"
                    placeholder="Provide full details, materials, and care instructions..."
                    value={formData.detailedDescription}
                    onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                    rows={5}
                />

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Accessory Images</label>
                    <ImageUpload
                        value={formData.images}
                        onChange={(urls) => setFormData({ ...formData, images: urls })}
                    />
                </div>

                <div className="flex items-center gap-2 py-4">
                    <input
                        type="checkbox"
                        id="featured"
                        checked={formData.featured}
                        onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                        className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="featured" className="text-sm font-medium text-gray-700">
                        Feature this accessory on the homepage
                    </label>
                </div>

                {error && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm border border-red-100">
                        {error}
                    </div>
                )}

                <div className="flex justify-end gap-4 pt-4 border-t border-gray-100">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-purple-600 hover:bg-purple-700 text-white px-8"
                    >
                        {isLoading ? "Creating..." : "Add Accessory"}
                    </Button>
                </div>
            </form>
        </div>
    );
}
