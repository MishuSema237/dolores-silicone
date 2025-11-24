"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "@/lib/context/cart-context";

export default function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(href);
  };

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  return (
    <header className="h-[60px] flex justify-between items-center border-b border-pink-200 px-6 mb-12 sticky top-0 z-50 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-black no-underline hover:no-underline z-20">
        REBORN BABIES
      </Link>

      {/* Desktop Navigation */}
      <nav className={`hidden md:flex gap-6 transition-opacity duration-300 ${searchOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base font-medium text-black no-underline px-1 py-0 hover:bg-pink-50 hover:text-pink-600 transition-colors rounded ${isActive(link.href)
              ? "font-bold border-b-2 border-pink-500 pb-0.5 text-pink-600"
              : ""
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Icons & Search */}
      <div className="hidden md:flex items-center gap-6 relative">
        {/* Sliding Search Input */}
        <div
          className={`flex items-center absolute right-16 transition-all duration-300 ease-in-out overflow-hidden ${searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
        >
          <form onSubmit={handleSearchSubmit} className="w-full">
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onBlur={() => !searchQuery && setSearchOpen(false)}
              className="w-full h-9 px-3 py-1 text-sm border border-pink-300 rounded-full focus:outline-none focus:border-pink-500 bg-pink-50/50"
            />
          </form>
        </div>

        <button
          type="button"
          aria-label="Search"
          onClick={() => setSearchOpen(!searchOpen)}
          className={`text-xl text-black cursor-pointer hover:text-gray-500 bg-transparent border-0 p-0 z-20 transition-colors ${searchOpen ? 'text-pink-600' : ''}`}
        >
          {searchOpen ? <FaTimes /> : <FaSearch />}
        </button>

        <Link
          href="/cart"
          aria-label="Shopping cart"
          className="text-xl text-black hover:text-gray-500 no-underline relative z-20"
        >
          <FaShoppingCart />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-xl text-black cursor-pointer hover:text-gray-500 bg-transparent border-0 p-2 z-20"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-pink-200 shadow-lg z-50 md:hidden rounded-b-xl">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-base font-medium text-black no-underline border-b border-pink-100 hover:bg-pink-50 hover:text-pink-600 transition-colors ${isActive(link.href) ? "font-bold bg-pink-50 text-pink-600" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4 border-b border-gray-200">
              <form onSubmit={(e) => {
                handleSearchSubmit(e);
                setMobileMenuOpen(false);
              }} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-10 pl-4 pr-10 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-pink-500"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <FaSearch />
                </button>
              </form>
            </div>
            <div className="flex items-center justify-between px-6 py-4">
              <span className="font-medium">Cart</span>
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Shopping cart"
                className="text-xl text-black hover:text-gray-500 no-underline relative"
              >
                <FaShoppingCart />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount > 9 ? "9+" : itemCount}
                  </span>
                )}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
