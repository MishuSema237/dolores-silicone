import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import PaymentMethod from "@/lib/models/PaymentMethod";

export async function GET() {
    try {
        await connectMongoose();
        const methods = await PaymentMethod.find({}).sort({ createdAt: -1 });
        return NextResponse.json(methods);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to fetch payment methods" },
            { status: 500 }
        );
    }
}

export async function POST(request: Request) {
    try {
        await connectMongoose();
        const body = await request.json();

        if (!body.name) {
            return NextResponse.json(
                { error: "Name is required" },
                { status: 400 }
            );
        }

        const method = await PaymentMethod.create(body);
        return NextResponse.json(method, { status: 201 });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to create payment method" },
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
        const method = await PaymentMethod.findByIdAndUpdate(id, body, { new: true });

        if (!method) {
            return NextResponse.json({ error: "Payment method not found" }, { status: 404 });
        }

        return NextResponse.json(method);
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to update payment method" },
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

        await PaymentMethod.findByIdAndDelete(id);
        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message || "Failed to delete payment method" },
            { status: 500 }
        );
    }
}
