import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Testimonial from "@/lib/models/Testimonial";

export async function GET() {
    try {
        await connectMongoose();
        const testimonials = await Testimonial.find({}).sort({ createdAt: -1 });
        return NextResponse.json(testimonials);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch testimonials" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoose();
        const body = await request.json();
        const testimonial = await Testimonial.create(body);
        return NextResponse.json(testimonial, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to create testimonial" },
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
        const testimonial = await Testimonial.findByIdAndUpdate(id, body, { new: true });

        if (!testimonial) {
            return NextResponse.json({ error: "Testimonial not found" }, { status: 404 });
        }

        return NextResponse.json(testimonial);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to update testimonial" },
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

        await Testimonial.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete testimonial" },
            { status: 500 }
        );
    }
}
