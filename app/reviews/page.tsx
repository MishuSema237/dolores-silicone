"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

interface Review {
  _id: string;
  customer: string;
  rating: number;
  comment: string;
  image?: string;
  createdAt: string;
}

function StarRating({ rating, size = "text-lg" }: { rating: number; size?: string }) {
  return (
    <div className={`flex gap-1 ${size}`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={star <= rating ? "text-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    customer: "",
    rating: "5",
    comment: "",
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          setReviews(data);
        }
      }
    } catch {
      // reviews stay empty
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: formData.customer,
          rating: parseInt(formData.rating),
          comment: formData.comment,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit review");
      }
      toast.success("Thank you! Your review has been submitted for approval.");
      setFormData({ customer: "", rating: "5", comment: "" });
      fetchReviews();
    } catch (error: any) {
      toast.error(error.message || "Failed to submit review. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalReviews = reviews.length;
  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews).toFixed(1)
      : "0.0";

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0c0517] text-white py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-bl from-purple-900/40 via-[#0c0517] to-violet-900/25" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] -translate-y-1/3" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-violet-500/8 rounded-full blur-[100px] translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "radial-gradient(circle, #a78bfa 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }} />
        <div className="absolute top-[18%] right-[22%] w-20 h-20 border border-purple-500/15 rounded-full" />
        <div className="absolute bottom-[20%] left-[12%] w-16 h-16 border-2 border-violet-400/10 rounded-xl rotate-45" />
        <div className="absolute top-[40%] left-[25%] w-2 h-2 bg-purple-400/35 rounded-full" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-gradient-to-r from-transparent to-purple-400/60" />
            <div className="w-1.5 h-1.5 bg-purple-400/60 rotate-45" />
            <div className="w-10 h-px bg-gradient-to-l from-transparent to-purple-400/60" />
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
              What Our
            </span>
            <br />
            <span className="text-purple-400/80">Collectors Say</span>
          </h1>
          <p className="text-purple-200/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Real words from the families, collectors, and therapists who have
            welcomed a Dolores Silicone baby into their lives.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Stats Bar */}
        {!isLoading && totalReviews > 0 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-16 mb-14 pb-14 border-b border-gray-200">
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">{averageRating}</p>
              <div className="flex justify-center mt-2">
                <StarRating rating={Math.round(parseFloat(averageRating))} />
              </div>
              <p className="text-sm text-gray-500 mt-2">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">{totalReviews}</p>
              <p className="text-sm text-gray-500 mt-2">Total Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-gray-900">100%</p>
              <p className="text-sm text-gray-500 mt-2">Would Recommend</p>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Loading reviews...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {reviews.map((review) => (
              <div
                key={review._id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-500"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">
                    {review.customer}
                  </h3>
                  <StarRating rating={review.rating} size="text-sm" />
                </div>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  &ldquo;{review.comment}&rdquo;
                </p>
                {review.image && (
                  <img
                    src={review.image}
                    alt={`Review by ${review.customer}`}
                    className="w-full h-48 object-cover rounded-xl mb-4"
                  />
                )}
                <p className="text-xs text-gray-400">
                  {new Date(review.createdAt).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Submit Review Form */}
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Share Your Experience
            </h2>
            <p className="text-gray-500">
              Your feedback helps other collectors find their perfect baby.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-6"
          >
            <div>
              <label
                htmlFor="customer"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                id="customer"
                type="text"
                required
                placeholder="Your name"
                value={formData.customer}
                onChange={(e) =>
                  setFormData({ ...formData, customer: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="rating"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Rating
              </label>
              <select
                id="rating"
                value={formData.rating}
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-white"
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Review
              </label>
              <textarea
                id="comment"
                required
                rows={4}
                placeholder="Tell us about your experience with Dolores Silicone..."
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none resize-none"
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Submit Review"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
