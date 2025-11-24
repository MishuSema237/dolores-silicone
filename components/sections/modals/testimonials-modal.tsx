import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";



export function TestimonialsModalContent() {
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/admin/testimonials");
        if (res.ok) {
          const data = await res.json();
          setTestimonials(data);
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (isLoading) {
    return <div className="text-center p-8">Loading testimonials...</div>;
  }

  if (testimonials.length === 0) {
    return <div className="text-center p-8">No testimonials yet.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-gray-100 p-6 border border-gray-300"
        >
          <p className="italic mb-4">"{testimonial.content}"</p>
          <p className="font-semibold mb-2">
            - {testimonial.name} - {testimonial.role}
          </p>
          <div className="flex justify-center gap-1 text-black text-lg">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

