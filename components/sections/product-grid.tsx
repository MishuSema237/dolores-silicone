"use client";

import { useState, useRef, useEffect } from "react";
import { ProductCard } from "@/components/ui/product-card";
import { AccessoryCard } from "@/components/shop/accessory-card";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight, FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Product {
  _id?: string;
  id?: string;
  name: string;
  price: number;
  imageUrl?: string;
  images?: string[];
  slug: string;
  description?: string;
  category?: string;
}

interface ProductGridProps {
  products: Product[];
  title?: string;
  showViewAll?: boolean;
  itemsPerPage?: number;
  enablePagination?: boolean;
  layout?: "grid" | "carousel";
  mobileLayout?: "carousel" | "grid";
}

export function ProductGrid({
  products,
  title = "Our Latest Creations",
  showViewAll = true,
  itemsPerPage = 8,
  enablePagination = false,
  layout = "grid",
  mobileLayout = "carousel",
}: ProductGridProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const [activeSlide, setActiveSlide] = useState(0);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = enablePagination ? products.slice(startIndex, startIndex + itemsPerPage) : products;

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);

      // Calculate active slide
      // Assuming card width is roughly 45vw on mobile (small cards) or 33% on desktop
      const itemWidth = clientWidth < 768 ? clientWidth * 0.45 : clientWidth / 3;
      const newActiveSlide = Math.round(scrollLeft / itemWidth);
      setActiveSlide(newActiveSlide);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [products]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const renderCard = (product: Product) => {
    const commonProps = {
      id: product._id || product.id || "",
      name: product.name,
      price: product.price,
      slug: product.slug,
      imageUrl: product.imageUrl || (product.images && product.images[0]),
      description: product.description,
      category: product.category,
    };

    if (product.category === "accessory") {
      return <AccessoryCard key={product._id || product.id} {...commonProps} />;
    }

    return <ProductCard key={product._id || product.id} {...commonProps} />;
  };

  return (
    <section className="mb-6 relative">
      <div className="container mx-auto">
        {title && (
          <div className="flex justify-between items-end mb-6 md:mb-12">
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-display">{title}</h2>
            </div>
            {layout === "carousel" && (
              <div className="hidden md:flex gap-2 md:gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-8 h-8 md:w-12 md:h-12 border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-30"
                  onClick={() => scroll("left")}
                  disabled={!canScrollLeft}
                >
                  <FaChevronLeft />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full w-12 h-12 border-purple-200 text-purple-600 hover:bg-purple-50 disabled:opacity-30"
                  onClick={() => scroll("right")}
                  disabled={!canScrollRight}
                >
                  <FaChevronRight />
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Carousel Layout (Both Desktop and Mobile if requested) */}
        {(layout === "carousel" || mobileLayout === "carousel") && (
          <div
            className={`${mobileLayout === "carousel" ? "flex" : "hidden"} ${layout === "carousel" ? "md:flex" : "md:hidden"} overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-4 md:pb-8 scrollbar-hide`}
            ref={scrollRef}
            onScroll={checkScroll}
          >
            {products.map((product) => (
              <div
                key={product._id || product.id}
                className="snap-start shrink-0 w-[45vw] md:w-[calc(33.333%-16px)]"
              >
                {renderCard(product)}
              </div>
            ))}
          </div>
        )}

        {/* Grid Layout (Desktop) */}
        {layout === "grid" && (
          <div className="hidden md:grid grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
            {currentProducts.map((product) => renderCard(product))}
          </div>
        )}

        {/* Grid Layout (Mobile) */}
        {mobileLayout === "grid" && (
          <div className="md:hidden grid grid-cols-2 gap-2 mb-8">
            {currentProducts.map((product) => renderCard(product))}
          </div>
        )}

        {/* Pagination Controls (Grid only) */}
        {layout === "grid" && enablePagination && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center disabled:opacity-30 text-gray-900 border-gray-300 hover:bg-gray-100"
            >
              <FaChevronLeft />
            </Button>
            <span className="font-medium text-gray-900">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="rounded-full w-12 h-12 p-0 flex items-center justify-center disabled:opacity-30 text-gray-900 border-gray-300 hover:bg-gray-100"
            >
              <FaChevronRight />
            </Button>
          </div>
        )}

        {showViewAll && !enablePagination && (
          <div className="text-center mt-2">
            <Button
              href="/shop"
              variant="outline"
              className="rounded-xl border-purple-200 text-purple-600 hover:bg-purple-50 group px-8"
            >
              View Collection <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

