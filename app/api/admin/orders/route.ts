import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Order from "@/lib/models/Order";

export async function GET() {
    try {
        await connectMongoose();
        const orders = await Order.find({}).sort({ createdAt: -1 });
        return NextResponse.json(orders);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch orders" },
            { status: 500 }
        );
    }
}
