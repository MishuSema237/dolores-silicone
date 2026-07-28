import { NextRequest, NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Message from "@/lib/models/Message";

export async function GET() {
    try {
        await connectMongoose();
        const messages = await Message.find({}).sort({ createdAt: -1 });
        return NextResponse.json(messages);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch messages" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: NextRequest) {
    try {
        await connectMongoose();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json(
                { error: "Missing id parameter" },
                { status: 400 }
            );
        }

        const message = await Message.findByIdAndDelete(id);

        if (!message) {
            return NextResponse.json(
                { error: "Message not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete message" },
            { status: 500 }
        );
    }
}
