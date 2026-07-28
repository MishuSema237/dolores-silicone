import { NextRequest, NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Review from "@/lib/models/Review";

export async function GET() {
    try {
        await connectMongoose();
        const reviews = await Review.find({}).sort({ createdAt: -1 });
        return NextResponse.json(reviews);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch reviews" },
            { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectMongoose();
        const body = await request.json();

        const review = await Review.create({
            customer: body.customer,
            rating: body.rating || 5,
            comment: body.comment,
            image: body.image || undefined,
            status: body.status || "Published",
        });

        return NextResponse.json(review, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to create review" },
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
