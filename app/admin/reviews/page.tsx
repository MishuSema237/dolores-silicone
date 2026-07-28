"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DataTable } from "@/components/admin/data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaPlus, FaStar } from "react-icons/fa";

interface Review {
  _id: string;
  customer: string;
  rating: number;
  comment: string;
  image?: string;
  status: "Published" | "Pending" | "Rejected";
  createdAt: string;
}

export default function AdminReviewsPage() {
  const router = useRouter();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/admin/reviews");
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (error) {
      console.error("Failed to fetch reviews:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleDelete = async (review: Review) => {
    if (!confirm(`Delete review by "${review.customer}"?`)) return;

    try {
      const res = await fetch(`/api/admin/reviews/${review._id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setReviews((prev) => prev.filter((r) => r._id !== review._id));
      }
    } catch (error) {
      console.error("Error deleting review:", error);
    }
  };

  const handleToggleStatus = async (review: Review) => {
    const newStatus = review.status === "Published" ? "Pending" : "Published";
    try {
      const res = await fetch(`/api/admin/reviews/${review._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        setReviews((prev) =>
          prev.map((r) =>
            r._id === review._id ? { ...r, status: newStatus } : r
          )
        );
      }
    } catch (error) {
      console.error("Error updating review:", error);
    }
  };

  const columns = [
    {
      header: "Customer",
      accessor: (review: Review) => (
        <div className="font-medium text-gray-900">{review.customer}</div>
      ),
    },
    {
      header: "Rating",
      accessor: (review: Review) => (
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`w-3 h-3 ${
                star <= review.rating ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">{review.rating}/5</span>
        </div>
      ),
    },
    {
      header: "Review",
      accessor: (review: Review) => (
        <p className="text-sm text-gray-600 line-clamp-2 max-w-xs">{review.comment}</p>
      ),
    },
    {
      header: "Status",
      accessor: (review: Review) => (
        <button
          onClick={() => handleToggleStatus(review)}
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer transition-colors ${
            review.status === "Published"
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : review.status === "Pending"
              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
              : "bg-red-100 text-red-800 hover:bg-red-200"
          }`}
        >
          {review.status}
        </button>
      ),
    },
    {
      header: "Date",
      accessor: (review: Review) => (
        <span className="text-sm text-gray-500">
          {new Date(review.createdAt).toLocaleDateString("en-GB")}
        </span>
      ),
    },
  ];

  const publishedCount = reviews.filter((r) => r.status === "Published").length;
  const pendingCount = reviews.filter((r) => r.status === "Pending").length;

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-2">
            Reviews
          </h1>
          <p className="text-gray-500">Manage customer reviews and ratings.</p>
        </div>
        <Link href="/admin/reviews/add">
          <Button className="flex items-center gap-2">
            <FaPlus /> Add Review
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Total Reviews</p>
          <p className="text-2xl font-bold text-gray-900">{reviews.length}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Published</p>
          <p className="text-2xl font-bold text-green-600">{publishedCount}</p>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-2xl font-bold text-yellow-600">{pendingCount}</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {isLoading ? (
          <div className="p-8 text-center text-gray-500">Loading reviews...</div>
        ) : reviews.length > 0 ? (
          <DataTable
            data={reviews}
            columns={columns}
            keyField="_id"
            onDelete={handleDelete}
            onEdit={(review) => router.push(`/admin/reviews/edit/${review._id}`)}
            isLoading={isLoading}
          />
        ) : (
          <div className="p-12 text-center">
            <p className="text-gray-500 mb-4">No reviews yet.</p>
            <Link href="/admin/reviews/add">
              <Button variant="outline">Add your first review</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
