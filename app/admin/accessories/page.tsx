"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ManageAccessoriesPage() {
    const router = useRouter();

    useEffect(() => {
        router.replace("/admin/products?category=accessories");
    }, [router]);

    return (
        <div className="p-8 text-center text-gray-500">
            Redirecting to products...
        </div>
    );
}
