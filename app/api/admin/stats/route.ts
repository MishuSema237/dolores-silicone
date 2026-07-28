import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Product from "@/lib/models/Product";
import Order from "@/lib/models/Order";
import GalleryItem from "@/lib/models/GalleryItem";
import Review from "@/lib/models/Review";

export async function GET() {
    try {
        await connectMongoose();

        const [
            totalOrders,
            pendingOrders,
            totalGirls,
            totalBoys,
            totalAccessories,
            totalGalleryImages,
            totalReviews,
            pendingReviews,
            recentOrders,
        ] = await Promise.all([
            Order.countDocuments({}),
            Order.countDocuments({ status: "pending" }),
            Product.countDocuments({ category: 'girls' }),
            Product.countDocuments({ category: 'boys' }),
            Product.countDocuments({ category: 'accessories' }),
            GalleryItem.countDocuments({}),
            Review.countDocuments({ status: "Published" }),
            Review.countDocuments({ status: "Pending" }),
            Order.find({}).sort({ createdAt: -1 }).limit(5),
        ]);

        return NextResponse.json({
            orders: {
                total: totalOrders,
                pending: pendingOrders,
            },
            products: {
                girls: totalGirls,
                boys: totalBoys,
                accessories: totalAccessories,
                total: totalGirls + totalBoys + totalAccessories,
            },
            gallery: totalGalleryImages,
            reviews: {
                published: totalReviews,
                pending: pendingReviews,
                total: totalReviews + pendingReviews,
            },
            recentOrders,
        });
    } catch (error: any) {
        console.error("Error fetching admin stats:", error);
        return NextResponse.json(
            { error: error.message || "Failed to fetch stats" },
            { status: 500 }
        );
    }
}
