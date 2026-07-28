import { NextRequest, NextResponse } from "next/server";
import connectMongoose from "@/lib/db/mongodb";
import Message from "@/lib/models/Message";
import { sendContactEmail } from "@/lib/email";
import { handleApiError } from "@/lib/utils/api-error-handler";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (!body.name || !body.email || !body.message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    await connectMongoose();

    const message = await Message.create({
      name: body.name,
      email: body.email,
      subject: body.subject || undefined,
      content: body.message,
      status: "New",
    });

    try {
      await sendContactEmail({
        name: body.name,
        email: body.email,
        subject: body.subject || "Contact Form Submission",
        message: body.message,
      });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json(
      { success: true, message: "Message sent successfully", id: message._id },
      { status: 201 }
    );
  } catch (error: any) {
    return handleApiError(error);
  }
}


