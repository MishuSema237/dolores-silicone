"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { TestimonialsModalContent } from "./modals/testimonials-modal";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export function TestimonialsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("/api/admin/testimonials");
        if (res.ok) {
          const data = await res.json();
          // Take only the first 3 for the preview
          setTestimonials(data.slice(0, 3));
        }
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  if (testimonials.length === 0) return null;

  return (
    <>
      <section className="py-32 bg-gray-50/80 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-purple-100/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Collector Testimonials</span>
            <h2 className="mb-6 font-display">Hear From Our Globally <br /> Growing Family</h2>
            <p className="text-xl text-gray-500 font-light">
              We take pride in every match made. Read how our babies have brought warmth and joy to homes across the world.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass p-10 rounded-[2.5rem] shadow-premium hover:shadow-2xl transition-all duration-500 border border-white group relative"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                  <div className="text-purple-100 text-5xl font-serif leading-none select-none opacity-50 group-hover:opacity-100 transition-opacity">“</div>
                </div>

                <p className="text-gray-700 italic leading-relaxed text-lg font-light mb-10 min-h-[120px]">
                  "{testimonial.content}"
                </p>

                <div className="pt-8 border-t border-purple-50 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center font-bold text-purple-600 text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-gray-900 leading-tight mb-1">{testimonial.name}</h4>
                    <p className="text-xs text-purple-500 font-black uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <Button
              variant="outline"
              onClick={() => setModalOpen(true)}
              className="h-14 px-10 rounded-2xl border-purple-200 text-purple-700 hover:bg-purple-50 font-bold tracking-wide"
            >
              Read All Stories
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="What Our Valued Collectors Say"
      >
        <TestimonialsModalContent />
      </Modal>
    </>
  );
}

