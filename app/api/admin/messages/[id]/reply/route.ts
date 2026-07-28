import { NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Message from "@/lib/models/Message";
import { sendEmail } from "@/lib/email";
import { generateEmailTemplate } from "@/lib/email-template";

export async function POST(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        await connectMongoose();
        const { id } = await params;
        const body = await request.json();
        const { message } = body;

        if (!message?.trim()) {
            return NextResponse.json(
                { error: "Message is required" },
                { status: 400 }
            );
        }

        const msg = await Message.findById(id);
        if (!msg) {
            return NextResponse.json(
                { error: "Message not found" },
                { status: 404 }
            );
        }

        const htmlContent = `
            <h2>Re: ${msg.subject || "Your message to Dolores Silicone"}</h2>
            <p>Hi ${msg.name},</p>
            <div style="margin: 20px 0; padding: 16px; background: #f9fafb; border-radius: 8px; border-left: 3px solid #9333ea;">
                ${message.replace(/\n/g, "<br>")}
            </div>
            <p>Best regards,</p>
            <p><strong>Dolores Silicone Team</strong></p>
        `;

        await sendEmail({
            to: msg.email,
            subject: `Re: ${msg.subject || "Your message to Dolores Silicone"}`,
            html: generateEmailTemplate(htmlContent),
        });

        await Message.findByIdAndUpdate(id, { status: "Replied" });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error("Error sending reply:", error);
        return NextResponse.json(
            { error: error.message || "Failed to send reply" },
            { status: 500 }
        );
    }
}
