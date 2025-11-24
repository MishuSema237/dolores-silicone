import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Order from "@/lib/models/Order";

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;
        const order = await Order.findById(id);

        if (!order) {
            return NextResponse.json(
                { error: "Order not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(order);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch order" },
            { status: 500 }
        );
    }
}
