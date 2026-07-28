import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Order from "@/lib/models/Order";
import { sendOrderUpdateEmail } from "@/lib/email";

// Sends payment details / reply to customer via SMTP

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;
        const body = await request.json();
        const { message, subject, attachments } = body;

        const order = await Order.findById(id);
        if (!order) {
            return NextResponse.json(
                { error: "Order not found" },
                { status: 404 }
            );
        }

        await sendOrderUpdateEmail(order.customer.email, subject, message, attachments);

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to send reply" },
            { status: 500 }
        );
    }
}
