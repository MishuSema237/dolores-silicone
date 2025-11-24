import { NextRequest, NextResponse } from "next/server";

// For now, we'll use EmailJS or just log the contact form
// You can integrate with EmailJS or send to your email service

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // TODO: Send email via EmailJS or your email service
    // For now, just log it
    console.log("Contact form submission:", {
      name: body.name,
      email: body.email,
      subject: body.subject,
      message: body.message,
      timestamp: new Date().toISOString(),
    });

    // In production, you would:
    // 1. Send email via EmailJS
    // 2. Or save to database
    // 3. Or send to your email service

    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}


