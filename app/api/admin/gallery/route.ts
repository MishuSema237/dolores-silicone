import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import GalleryItem from "@/lib/models/GalleryItem";

export async function GET() {
    try {
        await connectMongoose();
        const items = await GalleryItem.find({}).sort({ createdAt: -1 });
        return NextResponse.json(items);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch gallery items" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoose();
        const body = await request.json();
        const item = await GalleryItem.create(body);
        return NextResponse.json(item, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to create gallery item" },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
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

        await GalleryItem.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete gallery item" },
            { status: 500 }
        );
    }
}
