import { NextRequest, NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Review from "@/lib/models/Review";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;
        const review = await Review.findById(id).lean();

        if (!review) {
            return NextResponse.json(
                { error: "Review not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(review);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch review" },
            { status: 500 }
        );
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;
        const body = await request.json();

        const review = await Review.findByIdAndUpdate(id, body, { new: true });

        if (!review) {
            return NextResponse.json(
                { error: "Review not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(review);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to update review" },
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

        const review = await Review.findByIdAndDelete(id);

        if (!review) {
            return NextResponse.json(
                { error: "Review not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete review" },
            { status: 500 }
        );
    }
}
