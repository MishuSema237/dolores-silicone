"use client";

import { useState, useMemo } from "react";
import { ProductGrid } from "@/components/sections/product-grid";
import { FaSearch, FaFilter, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ShopClientProps {
    initialProducts: any[];
}

export function ShopClient({ initialProducts }: ShopClientProps) {
    const [searchQuery, setSearchQuery] = useState("");
    const [sortOption, setSortOption] = useState("newest");
    const [category, setCategory] = useState("all");
    const [priceRange, setPriceRange] = useState<{ min: string; max: string }>({
        min: "",
        max: "",
    });
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const filteredProducts = useMemo(() => {
        let result = [...initialProducts];

        // Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(query) ||
                    p.description?.toLowerCase().includes(query)
            );
        }

        // Price Filter
        if (priceRange.min) {
            result = result.filter((p) => p.price >= Number(priceRange.min));
        }
        if (priceRange.max) {
            result = result.filter((p) => p.price <= Number(priceRange.max));
        }

        // Category Filter
        if (category !== "all") {
            result = result.filter((p) => (p.category || "baby") === category);
        }

        // Sort
        switch (sortOption) {
            case "price-asc":
                result.sort((a, b) => a.price - b.price);
                break;
            case "price-desc":
                result.sort((a, b) => b.price - a.price);
                break;
            case "name-asc":
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "newest":
            default:
                result.sort(
                    (a, b) =>
                        new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
                );
                break;
        }

        return result;
    }, [initialProducts, searchQuery, priceRange, category, sortOption]);

    const activeFilterCount = [
        category !== "all",
        priceRange.min !== "" || priceRange.max !== "",
        sortOption !== "newest"
    ].filter(Boolean).length;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-12">
            <div className="text-center mb-6 md:mb-12">
                <h1 className="text-2xl md:text-5xl font-serif font-bold mb-4 bg-gradient-to-r from-purple-900 to-indigo-900 bg-clip-text text-transparent">
                    Our Collection
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg">
                    Discover our handcrafted silicone reborn babies and premium accessories, each one a unique masterpiece waiting to be cherished.
                </p>
            </div>

            {/* Filter Section */}
            <div className="mb-6 md:mb-12">
                <div className="flex flex-col sm:flex-row gap-4 items-stretch mb-4">
                    {/* Search Bar */}
                    <div className="flex-1 relative group">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors">
                            <FaSearch />
                        </div>
                        <input
                            type="text"
                            placeholder="Search our collection..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-2 md:py-4 bg-white border border-gray-200 rounded-md md:rounded-2xl focus:ring-4 focus:ring-purple-500/10 focus:border-purple-500 outline-none transition-all shadow-sm text-sm md:text-lg"
                        />
                    </div>

                    {/* Filter Toggle Button */}
                    <button
                        onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                        className={`flex text-sm md:text-lg items-center justify-center gap-3 px-4 py-2 md:px-8 md:py-4 rounded-md md:rounded-2xl font-bold transition-all border ${isFiltersOpen || activeFilterCount > 0
                            ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/20"
                            : "bg-white border-gray-200 text-gray-700 hover:border-purple-300 hover:bg-purple-50"
                            }`}
                    >
                        <FaFilter />
                        <span>Filters</span>
                        {activeFilterCount > 0 && (
                            <span className="flex items-center justify-center w-6 h-6 bg-white text-purple-600 rounded-full text-xs font-black">
                                {activeFilterCount}
                            </span>
                        )}
                        <div className="ml-2">
                            {isFiltersOpen ? <FaChevronUp /> : <FaChevronDown />}
                        </div>
                    </button>
                </div>

                {/* Collapsible Advanced Filters */}
                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isFiltersOpen ? "max-h-[500px] opacity-100 mb-8" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Categories */}
                        <div>
                            <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-4">
                                Categories
                            </label>
                            <div className="flex flex-col gap-2">
                                {["all", "baby", "accessory"].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setCategory(cat)}
                                        className={`text-left px-4 py-3 rounded-xl transition-all font-medium capitalize ${category === cat
                                            ? "bg-purple-50 text-purple-700 border-l-4 border-purple-600"
                                            : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                            }`}
                                    >
                                        {cat === "all" ? "All Categories" : cat === "baby" ? "Babies" : "Accessories"}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Price Range */}
                        <div>
                            <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-4">
                                Price Range
                            </label>
                            <div className="flex items-center gap-3">
                                <div className="flex-1 relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                    <input
                                        type="number"
                                        placeholder="Min"
                                        value={priceRange.min}
                                        onChange={(e) => setPriceRange(p => ({ ...p, min: e.target.value }))}
                                        className="w-full pl-8 pr-3 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                    />
                                </div>
                                <span className="text-gray-300">to</span>
                                <div className="flex-1 relative">
                                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                                    <input
                                        type="number"
                                        placeholder="Max"
                                        value={priceRange.max}
                                        onChange={(e) => setPriceRange(p => ({ ...p, max: e.target.value }))}
                                        className="w-full pl-8 pr-3 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Sorting */}
                        <div>
                            <label className="block text-sm font-black text-gray-900 uppercase tracking-widest mb-4">
                                Sort By
                            </label>
                            <select
                                value={sortOption}
                                onChange={(e) => setSortOption(e.target.value)}
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-purple-500 outline-none transition-all cursor-pointer appearance-none"
                            >
                                <option value="newest">Newest Arrivals</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="name-asc">Name: A to Z</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button
                            onClick={() => {
                                setCategory("all");
                                setPriceRange({ min: "", max: "" });
                                setSortOption("newest");
                                setSearchQuery("");
                            }}
                            className="text-sm font-bold text-gray-400 hover:text-red-500 flex items-center gap-2 transition-colors"
                        >
                            <FaTimes /> Clear all filters
                        </button>
                    </div>
                </div>
            </div>

            {/* Results */}
            {filteredProducts.length > 0 ? (
                <ProductGrid products={filteredProducts} showViewAll={false} mobileLayout="grid" />
            ) : (
                <div className="text-center py-12 bg-white rounded-[40px] border-2 border-dashed border-gray-100 flex flex-col items-center">
                    <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center text-purple-200 text-4xl mb-6">
                        <FaSearch />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">No matches found</h3>
                    <p className="text-gray-500 mb-8 max-w-sm">
                        Try adjusting your search or filters to find what you're looking for our treasure collection.
                    </p>
                    <button
                        onClick={() => {
                            setSearchQuery("");
                            setPriceRange({ min: "", max: "" });
                            setCategory("all");
                            setSortOption("newest");
                        }}
                        className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all hover:-translate-y-1"
                    >
                        Reset Search
                    </button>
                </div>
            )}
        </div>
    );
}
