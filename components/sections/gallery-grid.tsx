"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageViewer } from "@/components/ui/image-viewer";

interface GalleryItem {
  _id: string;
  title?: string;
  description?: string;
  imageUrl: string;
  tags?: string[];
}

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const images = items.map(item => item.imageUrl).filter(Boolean);

  const handleImageClick = (item: GalleryItem) => {
    const index = items.findIndex(i => i._id === item._id);
    if (index !== -1) {
      setSelectedIndex(index);
    }
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item) => (
          <button
            key={item._id}
            type="button"
            onClick={() => handleImageClick(item)}
            className="break-inside-avoid w-full bg-gray-100 border border-gray-300 rounded-xl overflow-hidden relative hover:scale-[1.02] transition-transform cursor-pointer group"
          >
            {item.imageUrl ? (
              <div className="relative w-full">
                <Image
                  src={item.imageUrl}
                  alt={item.title || "Gallery image"}
                  width={500}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
            ) : (
              <div className="h-[300px] flex items-center justify-center">
                <span>Gallery Image</span>
              </div>
            )}
          </button>
        ))}
      </div>

      <ImageViewer
        isOpen={selectedIndex !== null}
        onClose={() => setSelectedIndex(null)}
        images={images}
        initialIndex={selectedIndex || 0}
      />
    </>
  );
}


