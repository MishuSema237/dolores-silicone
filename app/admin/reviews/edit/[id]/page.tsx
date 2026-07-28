"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormInput, FormTextarea, FormSelect } from "@/components/ui/form-input";

export default function EditReviewPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    customer: "",
    rating: "5",
    comment: "",
    status: "Published",
  });

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await fetch(`/api/admin/reviews/${id}`);
        if (res.ok) {
          const review = await res.json();
          setFormData({
            customer: review.customer || "",
            rating: String(review.rating || 5),
            comment: review.comment || "",
            status: review.status || "Published",
          });
        } else {
          setError("Failed to load review");
        }
      } catch (err) {
        console.error("Error fetching review:", err);
        setError("Failed to load review");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReview();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setError("");

    try {
      const res = await fetch(`/api/admin/reviews/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData.customer,
          rating: parseInt(formData.rating),
          comment: formData.comment,
          status: formData.status,
        }),
      });

      if (res.ok) {
        router.push("/admin/reviews");
      } else {
        const data = await res.json();
        setError(data.error || "Failed to update review");
      }
    } catch (err) {
      console.error("Error updating review:", err);
      setError("An error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return <div className="p-8 text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-serif font-bold mb-8 text-gray-900">
        Edit Review
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
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : "Update Review"}
          </Button>
        </div>
      </form>
    </div>
  );
}
