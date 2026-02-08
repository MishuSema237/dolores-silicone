"use client";

import { useState } from "react";
import { FaHandSparkles, FaGem, FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { StoryModalContent } from "./modals/story-modal";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaHandSparkles className="text-4xl text-purple-500" />,
    title: "Unmatched Craftsmanship",
    description:
      "Each baby is a unique piece, meticulously sculpted, painted, and weighted by expert artists to achieve peak realism and quality.",
  },
  {
    icon: <FaGem className="text-4xl text-purple-500" />,
    title: "Premium Silicone Materials",
    description:
      "We use only the highest-grade platinum cure silicone, ensuring durability, a soft-touch feel, and hypoallergenic properties.",
  },
  {
    icon: <FaHeart className="text-4xl text-purple-500" />,
    title: "Personalized Ordering Experience",
    description:
      "Enjoy dedicated customer support and a transparent order-to-delivery process, tailored to provide peace of mind.",
  },
];

export function FeaturesSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Detail */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-100 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Excellence in Art</span>
            <h2 className="mb-6">Why Choose Our Masterpieces?</h2>
            <p className="text-xl text-gray-500 font-light">
              We combine artisan tradition with clinical precision to create the most realistic silicone companions in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center focus-within:ring-2 focus-within:ring-purple-500 rounded-[2rem] p-4 transition-all"
              >
                <div className="w-24 h-24 rounded-3xl bg-gray-50 flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500  relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-purple-600">
                    {feature.icon}
                  </span>
                </div>
                <h3 className="text-2xl mb-4 font-bold tracking-tight text-gray-900">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed font-light text-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-24">
            <Button
              variant="outline"
              onClick={() => setModalOpen(true)}
              className="h-14 px-10 rounded-2xl border-purple-200 text-purple-700 hover:bg-purple-50 font-bold tracking-wide"
            >
              Our Full Story & Ethics
            </Button>
          </div>
        </div>
      </section>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Our Story & Values"
      >
        <StoryModalContent />
      </Modal>
    </>
  );
}
