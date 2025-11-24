"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components/ui/modal";
import { FormInput } from "@/components/ui/form-input";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
      setResults([]);
      return;
    }

    // Search products when query changes
    if (searchQuery.length > 2) {
      setIsSearching(true);
      // TODO: Replace with actual API call to search products
      setTimeout(() => {
        // Mock search results
        const mockResults = [
          { id: "1", name: "Ella - Realistic Newborn", slug: "ella-realistic-newborn", price: 1200 },
          { id: "2", name: "Liam - Peaceful Sleeper", slug: "liam-peaceful-sleeper", price: 1350 },
        ].filter((item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setResults(mockResults);
        setIsSearching(false);
      }, 300);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [searchQuery, isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Search Products">
      <FormInput
        id="search"
        name="search"
        label=""
        type="text"
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        autoFocus
      />

      {isSearching && (
        <p className="text-sm text-gray-500 mt-4">Searching...</p>
      )}

      {!isSearching && searchQuery.length > 2 && results.length === 0 && (
        <p className="text-sm text-gray-500 mt-4">No products found.</p>
      )}

      {results.length > 0 && (
        <div className="mt-4 space-y-2">
          {results.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              onClick={onClose}
              className="block p-4 border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      )}

      {searchQuery.length <= 2 && (
        <p className="text-sm text-gray-500 mt-4">
          Type at least 3 characters to search...
        </p>
      )}
    </Modal>
  );
}

