import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Product from "@/lib/models/Product";
import Order from "@/lib/models/Order";
import GalleryItem from "@/lib/models/GalleryItem";
import Testimonial from "@/lib/models/Testimonial";

export async function GET() {
    try {
        await connectMongoose();

        const [
            totalOrders,
            pendingOrders,
            totalBabies,
            totalAccessories,
            totalGalleryImages,
            totalTestimonials,
            recentOrders,
        ] = await Promise.all([
            Order.countDocuments({}),
            Order.countDocuments({ status: "pending" }),
            Product.countDocuments({ category: 'baby' }),
            Product.countDocuments({ category: 'accessory' }),
            GalleryItem.countDocuments({}),
            Testimonial.countDocuments({}),
            Order.find({}).sort({ createdAt: -1 }).limit(5),
        ]);

        return NextResponse.json({
            orders: {
                total: totalOrders,
                pending: pendingOrders,
            },
            products: {
                babies: totalBabies,
                accessories: totalAccessories,
                total: totalBabies + totalAccessories
            },
            gallery: totalGalleryImages,
            testimonials: totalTestimonials,
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
