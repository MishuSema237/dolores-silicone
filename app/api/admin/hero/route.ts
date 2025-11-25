import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import HeroImage from "@/lib/models/HeroImage";

export async function GET() {
    try {
        await connectMongoose();
        const images = await HeroImage.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(images);
    } catch (error: any) {
        console.error("Error in GET /api/admin/hero:", error);
        return NextResponse.json(
            { error: error.message || "Failed to fetch hero images" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoose();
        const body = await request.json();

        if (!body.imageUrl || !body.title) {
            return NextResponse.json(
                { error: "Image URL and title are required" },
                { status: 400 }
            );
        }

        const image = await HeroImage.create(body);
        return NextResponse.json(image, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to create hero image" },
            { status: 500 }
        );
    }
}

export async function PUT(request: Request) {
    try {
        await connectMongoose();
        const { searchParams } = new URL(request.url);
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
        }

        const body = await request.json();
        const image = await HeroImage.findByIdAndUpdate(id, body, { new: true });

        if (!image) {
            return NextResponse.json({ error: "Hero image not found" }, { status: 404 });
        }

        return NextResponse.json(image);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to update hero image" },
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
            return NextResponse.json({ error: "Missing id parameter" }, { status: 400 });
        }

        await HeroImage.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete hero image" },
            { status: 500 }
        );
    }
}
