
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { ProductGrid } from "@/components/sections/product-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { FeaturesSection } from "@/components/sections/features";
import { ProcessModalContent } from "@/components/sections/modals/process-modal";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaArrowRight } from "react-icons/fa";

export default function Home() {
  const [processModalOpen, setProcessModalOpen] = useState(false);
  // Force rebuild for Vercel cache invalidation - 2026-02-08
  const [storyModalOpen, setStoryModalOpen] = useState(false);
  const [babyProducts, setBabyProducts] = useState<any[]>([]);
  const [accessoryProducts, setAccessoryProducts] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsRes = await fetch("/api/admin/products");
        if (productsRes.ok) {
          const data = await productsRes.json();
          const activeProducts = data.filter((p: any) => p.status === 'active');
          setBabyProducts(activeProducts.filter((p: any) => p.category === 'baby'));
          setAccessoryProducts(activeProducts.filter((p: any) => p.category === 'accessory'));
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full bg-white select-none">
      {/* Premium Hero Section */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#030014]">
        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 pt-40 pb-20 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Hero Text Content */}
            <div className="flex-1 text-center lg:text-left">


              <h1 className="text-white mb-6 md:mb-8 text-5xl md:text-6xl  leading-[0.95] tracking-tight">
                Crafting <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-400 animate-gradient-x">Artistic Reality</span> <br className="hidden md:block" />
                For Your Nursery.
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                Discover the world of ultra-realistic silicone reborn babies. Each creation is a unique piece of art, meticulously handcrafted to bring emotion and life into your home.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center lg:justify-start">
                <Button href="/shop" size="lg" className="w-full sm:w-auto bg-purple-600 text-white hover:bg-purple-500 h-16 px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-purple-900/40 group">
                  Explore Collection
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button href="/gallery" variant="outline" size="lg" className="w-full sm:w-auto glass-dark text-white border-white/10 h-16 px-10 rounded-2xl text-lg font-semibold hover:bg-white/5">
                  View Gallery
                </Button>
              </div>

              <div className="mt-12 md:mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-12 opacity-40">
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-white">1000+</span>
                  <span className="text-[10px] uppercase tracking-widest">Collectors</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-white">100%</span>
                  <span className="text-[10px] uppercase tracking-widest">Handcrafted</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold text-white">Worldwide</span>
                  <span className="text-[10px] uppercase tracking-widest">Shipping</span>
                </div>
              </div>
            </div>

            {/* Hero Image / Visual */}
            <div className="flex-1 relative w-full hidden lg:flex justify-center items-center lg:h-[800px] mt-12 lg:mt-0">
              <div className="relative w-full max-w-[300px] sm:max-w-md md:max-w-xl lg:max-w-2xl group">
                {/* Decorative Gradients behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 rounded-full blur-[80px]" />

                <div className="relative z-10 animate-float">
                  <Image
                    src="/assets/hero-image.png"
                    alt="Reborn Baby Masterpiece"
                    width={800}
                    height={1000}
                    className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-[2rem] md:rounded-[3rem]"
                    priority
                  />

                  {/* Floating Detail Card */}
                  <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 glass backdrop-blur-2xl p-4 md:p-6 rounded-2xl md:rounded-3xl border border-white/40 shadow-2xl hidden sm:block max-w-[180px] md:max-w-[240px]">
                    <p className="text-[10px] font-black uppercase text-purple-600 tracking-widest mb-1 md:mb-2">Artisan Pick</p>
                    <p className="text-gray-900 font-bold text-xs md:text-base mb-1">Ultra-Realistic Texture</p>
                    <p className="text-[10px] md:text-sm text-gray-500">Meticulous multi-layer painting for lifelike depth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Babies Section */}
      <section className="py-24 bg-gray-50/50">
        <div className="container mx-auto px-6">
          <ProductGrid
            products={babyProducts}
            layout="carousel"
            title="Life-Like Babies"
            showViewAll={true}
          />
        </div>
      </section>

      {/* About Section - Modern Split Layout */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 relative group w-full">
              <div className="relative h-[400px] md:h-[600px] w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Artisan at Work"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-purple-600 rounded-full flex items-center justify-center p-4 md:p-6 text-center shadow-xl border-4 border-white transform -rotate-12 hidden sm:flex">
                <p className="text-white font-black text-[8px] md:text-sm uppercase leading-tight tracking-widest">Est. 2018 <br /> Master Studio</p>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <span className="text-purple-600 font-black uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
              <h2 className="mb-8 font-display text-3xl md:text-5xl">Crafting Dreams, <br className="hidden md:block" /> One Baby at a Time</h2>
              <div className="space-y-6 text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                <p>
                  At Dolores Silicone, we pour our heart and soul into every silicone
                  reborn baby. Our artists bring these lifelike creations to being
                  through meticulous sculpting, detailed hand-painting, and precise
                  weighting.
                </p>
                <p>
                  We are dedicated to providing collectors with unparalleled realism,
                  quality, and an unforgettable experience. Our brand emphasizes client
                  satisfaction, love, and care.
                </p>
              </div>
              <Button
                variant="outline"
                className="mt-12 h-14 px-8 rounded-xl border-purple-200 text-purple-700 hover:bg-purple-50 group"
                onClick={() => setProcessModalOpen(true)}
              >
                Learn Our Process
                <FaPlay className="ml-3 text-xs opacity-50 group-hover:opacity-100 transition-opacity" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />

      {/* Featured Accessories Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6">
          <ProductGrid
            products={accessoryProducts}
            layout="carousel"
            title="Essential Accessories"
            showViewAll={true}
          />
        </div>
      </section>

      {/* Story Section - Elegant Reverse Split */}
      <section className="py-32 bg-gray-900 text-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-20">
            <div className="flex-1 relative lg:h-[700px] w-full flex items-center">
              <div className="relative h-[600px] w-full hidden md:block rounded-[3rem] overflow-hidden shadow-premium group">
                <Image
                  src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Our Story"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-purple-950/20 mix-blend-multiply" />
              </div>
              {/* Floating Overlay Card */}
              <div className="absolute bottom-10 -left-10 lg:bottom-1/4 lg:-left-20 glass-dark backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl max-w-sm hidden md:block">
                <div className="text-purple-400 text-4xl mb-4 font-serif italic font-bold">"</div>
                <p className="text-lg text-gray-200 italic leading-relaxed mb-4">
                  "The most rewarding feeling is seeing a collector's face when they hold their baby for the first time."
                </p>
                <p className="font-bold text-white tracking-widest text-sm uppercase">Dolores S. — Founder</p>
              </div>
            </div>

            <div className="flex-1">
              <span className="text-purple-400 font-black uppercase tracking-widest text-sm mb-4 block">The Journey</span>
              <h1 className="text-white mb-8 font-display">A Tale of Passion & Precision</h1>
              <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                <p>
                  Dolores Silicone was founded on a passion for transforming silicone
                  into breathing works of art. Our journey began with a single
                  artist's dream to create dolls that evoke warmth and emotion.
                </p>
                <p>
                  Over the years, this has grown into a collective of dedicated
                  artisans. We prioritize finding the perfect home for our babies,
                  ensuring they are treated with the love they deserve.
                </p>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${storyModalOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <p className="mb-6">
                    Our commitment to artistry, quality, and integrity guides everything
                    we do. We use only premium, ethically sourced silicone and
                    materials, ensuring that each Reborn baby is safe, durable, and a
                    joy to hold.
                  </p>
                  <p>
                    Thank you for being a part of our story. We look forward to
                    crafting a piece of art that brings joy and warmth into your life.
                  </p>
                </div>
              </div>

              {!storyModalOpen && (
                <button
                  onClick={() => setStoryModalOpen(true)}
                  className="mt-12 text-purple-400 font-bold hover:text-purple-300 flex items-center gap-3 group uppercase tracking-widest text-sm"
                >
                  Discover Full Story
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Professional Call To Action Section */}
      <section className="py-32 bg-white flex justify-center px-6">
        <div className="container max-w-6xl relative rounded-[4rem] overflow-hidden bg-purple-600 p-12 lg:p-24 text-center">
          {/* Background elements for CTA */}
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-purple-400/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-indigo-800/20 rounded-full blur-[60px]" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-white text-4xl lg:text-5xl mb-8 leading-tight">Ready to welcome a <br /> new bundle of joy?</h2>
            <p className="text-purple-100 text-xl mb-12 font-light max-w-xl mx-auto">
              Browse our available babies and accessories, or contact us for a custom creation piece.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <Button href="/shop" size="lg" className="bg-white text-purple-600 hover:bg-purple-50 h-16 px-12 rounded-2xl text-lg font-bold shadow-xl">
                Browse Collection
              </Button>
              <Button href="/contact" variant="outline" size="lg" className="border-white border text-white bg-transparent hover:bg-white/40 h-16 px-12 rounded-2xl text-lg font-semibold">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Modal */}
      <Modal
        isOpen={processModalOpen}
        onClose={() => setProcessModalOpen(false)}
        title="Our Process: Crafting Perfection"
      >
        <ProcessModalContent />
      </Modal>
    </div>
  );
}
