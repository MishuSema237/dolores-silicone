import { NextRequest, NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Review from "@/lib/models/Review";

export async function GET() {
    try {
        await connectMongoose();
        const reviews = await Review.find({ status: "Published" }).sort({
            createdAt: -1,
        });
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

        const { customer, rating, comment, image } = body;

        if (!customer || !rating || !comment) {
            return NextResponse.json(
                { error: "Customer name, rating, and comment are required" },
                { status: 400 }
            );
        }

        if (typeof rating !== "number" || rating < 1 || rating > 5) {
            return NextResponse.json(
                { error: "Rating must be a number between 1 and 5" },
                { status: 400 }
            );
        }

        const review = await Review.create({
            customer,
            rating,
            comment,
            image: image || undefined,
            status: "Pending",
        });

        return NextResponse.json(review, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to submit review" },
            { status: 500 }
        );
    }
}
