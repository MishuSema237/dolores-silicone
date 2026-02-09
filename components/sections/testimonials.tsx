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
      <section className="pt-10 md:pt-20 bg-gray-50/80 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute right-0 top-0 w-1/3 h-full bg-purple-100/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12 md:mb-24 max-w-3xl mx-auto">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Collector Testimonials</span>
            <h2 className="mb-6 font-display">Hear From Our Globally <br /> Growing Family</h2>
            <p className="text-sm md:text-xl text-gray-500 font-light">
              We take pride in every match made. Read how our babies have brought warmth and joy to homes across the world.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x lg:grid lg:grid-cols-3 gap-6 lg:gap-12 pb-8 lg:pb-0 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass p-6 md:p-10 rounded-xl md:rounded-[2.5rem] shadow-premium hover:shadow-2xl transition-all duration-500 border border-white group relative min-w-[85vw] md:min-w-[45vw] lg:min-w-0 snap-center"
              >
                <div className="flex justify-between items-start mb-4 md:mb-8">
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="text-xs md:text-sm" />
                    ))}
                  </div>
                  <div className="text-purple-100 text-3xl md:text-5xl font-serif leading-none select-none opacity-50 group-hover:opacity-100 transition-opacity">“</div>
                </div>

                <p className="text-gray-700 italic leading-relaxed text-sm md:text-lg font-light mb-6 md:mb-10 min-h-[80px] md:min-h-[120px]">
                  "{testimonial.content}"
                </p>

                <div className="pt-4 md:pt-8 border-t border-purple-50 flex items-center gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center font-bold text-purple-600 text-xs md:text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-gray-900 leading-tight mb-1">{testimonial.name}</h4>
                    <p className="text-[10px] md:text-xs text-purple-500 font-black uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 md:mt-24">
            <Button
              variant="outline"
              onClick={() => setModalOpen(true)}
              className="h-10 px-6 rounded-md md:h-14 md:px-10 md:rounded-2xl border-purple-200 text-purple-700 hover:bg-purple-50 font-semibold md:font-bold tracking-wide"
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

