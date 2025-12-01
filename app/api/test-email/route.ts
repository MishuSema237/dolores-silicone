import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT),
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            debug: true, // Enable debug output
            logger: true  // Log to console
        });

        // 1. Verify Connection
        console.log("Testing SMTP Connection...");
        await new Promise((resolve, reject) => {
            transporter.verify(function (error, success) {
                if (error) {
                    console.error("SMTP Verify Error:", error);
                    reject(error);
                } else {
                    console.log("SMTP Verify Success");
                    resolve(success);
                }
            });
        });

        // 2. Send Test Email
        console.log("Sending Test Email...");
        const info = await transporter.sendMail({
            from: `"${process.env.SMTP_FROM_NAME || 'Test'}" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Send to self
            subject: "Vercel SMTP Test",
            text: "If you receive this, your SMTP configuration is working correctly on Vercel.",
            html: "<h1>SMTP Test Success</h1><p>Your email configuration is working.</p>"
        });

        return NextResponse.json({
            status: "success",
            message: "Email sent successfully",
            config: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                user: process.env.SMTP_USER ? "***" : "missing",
                pass: process.env.SMTP_PASSWORD ? "***" : "missing",
            },
            messageId: info.messageId,
            response: info.response
        });

    } catch (error: any) {
        console.error("Test Email Failed:", error);
        return NextResponse.json({
            status: "error",
            message: error.message,
            code: error.code,
            response: error.response,
            config: {
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                user: process.env.SMTP_USER ? "***" : "missing",
                pass: process.env.SMTP_PASSWORD ? "***" : "missing",
            }
        }, { status: 500 });
    }
}
