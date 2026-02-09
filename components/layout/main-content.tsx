"use client";

import { usePathname } from "next/navigation";

export function MainContent({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isShop = pathname === "/shop";
    const isProductDetails = pathname?.startsWith("/product/");
    const isAdmin = pathname?.startsWith("/admin");

    if (isAdmin) {
        return (
            <main className="flex-1 bg-gray-50/50">
                {children}
            </main>
        );
    }

    return (
        <main
            className={`flex-1 w-full ${isHome || isShop || isProductDetails ? "p-0" : "max-w-viewport mx-auto px-4 md:px-8 pt-[35px]"
                }`}
        >
            {children}
        </main>
    );
}
