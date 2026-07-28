"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/form-input";

export default function AddReviewPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    customer: "",
    rating: "5",
    comment: "",
    status: "Published",
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/admin/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData.customer,
          rating: parseInt(formData.rating),
          comment: formData.comment,
          status: formData.status,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to create review");
      }

      router.push("/admin/reviews");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900">
        Add Review
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-2xl shadow-sm">
        <FormInput
          id="customer"
          name="customer"
          label="Customer Name"
          required
          value={formData.customer}
          onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
        />

        <FormSelect
          id="rating"
          label="Rating"
          value={formData.rating}
          onChange={(e) => setFormData({ ...formData, rating: e.target.value })}
          options={[
            { value: "5", label: "5 Stars — Excellent" },
            { value: "4", label: "4 Stars — Great" },
            { value: "3", label: "3 Stars — Good" },
            { value: "2", label: "2 Stars — Fair" },
            { value: "1", label: "1 Star — Poor" },
          ]}
        />

        <FormTextarea
          id="comment"
          label="Review"
          required
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          rows={5}
        />

        <FormSelect
          id="status"
          label="Status"
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          options={[
            { value: "Published", label: "Published" },
            { value: "Pending", label: "Pending" },
          ]}
        />

        {error && (
          <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm border border-red-100">
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
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Creating..." : "Add Review"}
          </Button>
        </div>
      </form>
    </div>
  );
}
