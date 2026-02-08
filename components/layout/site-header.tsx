"use client";
import localFont from "next/font/local";
const parisienne = localFont({
  src: "../../public/assets/Parisienne-Regular.ttf",
  variable: "--font-parisienne",
  display: "swap",
});
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
  const [scrolled, setScrolled] = useState(false);

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
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname?.startsWith("/admin")) {
    return null;
  }

  const isHome = pathname === "/";

  // Header background logic
  const headerBg = isHome
    ? (scrolled ? "bg-white shadow-sm" : "bg-transparent")
    : "bg-white shadow-sm";

  // Text color logic
  const textColor = isHome
    ? (scrolled ? "text-black" : "!text-white")
    : "text-black";

  const hoverColor = isHome
    ? (scrolled ? "hover:text-purple-600" : "hover:text-purple-200")
    : "hover:text-purple-600";

  const activeColor = isHome
    ? (scrolled ? "text-purple-600" : "!text-white")
    : "text-purple-600";

  const activeBorder = isHome
    ? (scrolled ? "border-purple-500" : "border-white")
    : "border-purple-500";

  const borderColor = isHome
    ? (scrolled ? "border-purple-200" : "border-transparent")
    : "border-purple-200";

  const positionClass = isHome ? "fixed top-0 left-0 right-0" : "sticky top-0";

  return (
    <header
      className={`h-[60px] flex justify-between items-center px-6 z-50 transition-all duration-300 ${positionClass} ${headerBg} ${borderColor} border-b`}
      data-scrolled={scrolled}
      data-path={pathname}
    >
      <Link href="/" style={{ fontFamily: "Parisienne" }} className={`text-3xl font-bold no-underline hover:no-underline z-20 !font-parisienne ${textColor}`}>
        Dolores Silicone
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-base font-medium no-underline px-1 py-0 transition-colors rounded ${textColor} ${hoverColor} ${isActive(link.href)
              ? `font-bold border-b-2 ${activeBorder} pb-0.5 ${activeColor}`
              : ""
              }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Desktop Icons */}
      <div className="hidden md:flex items-center gap-6 relative">
        <Link
          href="/cart"
          aria-label="Shopping cart"
          className={`text-xl hover:text-gray-500 no-underline relative z-20 ${textColor}`}
        >
          <FaShoppingCart />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount > 9 ? "9+" : itemCount}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden text-xl cursor-pointer hover:text-gray-500 bg-transparent border-0 p-2 z-20 ${textColor} relative`}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        {!mobileMenuOpen && itemCount > 0 && (
          <span className="absolute top-0 right-0 bg-purple-500 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
            {itemCount > 9 ? "9+" : itemCount}
          </span>
        )}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-purple-200 shadow-lg z-50 md:hidden rounded-b-xl">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-6 py-4 text-base font-medium text-black no-underline border-b border-purple-100 hover:bg-purple-50 hover:text-purple-600 transition-colors ${isActive(link.href) ? "font-bold bg-purple-50 text-purple-600" : ""
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                className="font-medium text-black"
              >
                Cart
              </Link>
              <Link
                href="/cart"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Shopping cart"
                className="text-xl text-black hover:text-gray-500 no-underline relative"
              >
                <FaShoppingCart />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
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
