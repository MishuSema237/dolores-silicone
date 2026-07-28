import { NextRequest, NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Message from "@/lib/models/Message";

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;
        const body = await request.json();

        const message = await Message.findByIdAndUpdate(id, body, {
            new: true,
        });

        if (!message) {
            return NextResponse.json(
                { error: "Message not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(message);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to update message" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;

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
