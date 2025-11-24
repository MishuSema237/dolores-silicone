import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import FAQ from "@/lib/models/FAQ";

export async function GET() {
    try {
        await connectMongoose();
        const faqs = await FAQ.find({}).sort({ order: 1, createdAt: -1 });
        return NextResponse.json(faqs);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch FAQs" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoose();
        const body = await request.json();

        if (!body.question || !body.answer) {
            return NextResponse.json(
                { error: "Question and Answer are required" },
                { status: 400 }
            );
        }

        const faq = await FAQ.create(body);
        return NextResponse.json(faq, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to create FAQ" },
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
        const faq = await FAQ.findByIdAndUpdate(id, body, { new: true });

        if (!faq) {
            return NextResponse.json({ error: "FAQ not found" }, { status: 404 });
        }

        return NextResponse.json(faq);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to update FAQ" },
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

        await FAQ.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete FAQ" },
            { status: 500 }
        );
    }
}
