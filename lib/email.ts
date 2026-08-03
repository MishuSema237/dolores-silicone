import nodemailer from "nodemailer";
import { generateEmailTemplate } from "./email-template";

// Create reusable transporter object using the default SMTP transport
const smtpPort = Number(process.env.SMTP_PORT) || 465;
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpPort === 465, // true for 465 (SSL), false for 587 (STARTTLS)
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

interface SendEmailParams {
    to: string;
    subject: string;
    html: string;
    attachments?: any[];
}

export async function sendEmail({ to, subject, html, attachments }: SendEmailParams) {
    try {
        const info = await transporter.sendMail({
            from: `"${process.env.SMTP_FROM_NAME || 'Dolores Silicone'}" <${process.env.SMTP_USER}>`,
            to,
            subject,
            html,
            attachments: attachments || []
        });
        console.log("Message sent: %s", info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error: any) {
        console.error("Error sending email:", error);
        // Log detailed error for Vercel debugging
        if (error.response) {
            console.error("SMTP Response:", error.response);
        }
        if (error.code) {
            console.error("SMTP Error Code:", error.code);
        }
        throw error; // Re-throw to handle in caller
    }
}

export async function sendContactEmail(data: {
    name: string;
    email: string;
    subject: string;
    message: string;
}) {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    // Email to Admin
    const adminContent = `
      <h2>Nuevo mensaje de contacto</h2>
      <p><strong>De:</strong> ${data.name} (${data.email})</p>
      <p><strong>Asunto:</strong> ${data.subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${data.message.replace(/\n/g, "<br>")}</p>
    `;

    try {
        await sendEmail({
            to: adminEmail as string,
            subject: `Nuevo mensaje de contacto: ${data.subject}`,
            html: generateEmailTemplate(adminContent),
        });
        console.log("Admin notification sent");
    } catch (error) {
        console.error("Failed to send admin notification:", error);
        // Don't throw here, try to send user confirmation
    }

    // Auto-reply to User
    const userContent = `
      <h2>¡Gracias por contactarnos!</h2>
      <p>Hola ${data.name},</p>
      <p>Hemos recibido tu mensaje sobre "${data.subject}". Te responderemos lo antes posible.</p>
      <br>
      <p>Un cordial saludo,</p>
      <p>Equipo Dolores Silicone</p>
    `;

    try {
        await sendEmail({
            to: data.email,
            subject: "Hemos recibido tu mensaje - Dolores Silicone",
            html: generateEmailTemplate(userContent),
        });
        console.log("User confirmation sent");
    } catch (error) {
        console.error("Failed to send user confirmation:", error);
        throw error; // Throw if user email fails
    }
}

export async function sendOrderConfirmationEmail(order: any) {
    // Email to Customer
    const customerContent = `
      <h1>¡Pedido confirmado!</h1>
      <p>Hola ${order.customer.name},</p>
      <p>Gracias por tu pedido. Tu número de referencia es <strong>${order.orderReference}</strong>.</p>
      <p>Revisaremos tu pedido y te enviaremos los detalles de pago en breve.</p>
      <h3>Resumen del pedido:</h3>
      <ul>
        ${order.items.map((item: any) => `<li>${item.name} (x${item.quantity}) - €${(item.price * item.quantity).toFixed(2)}</li>`).join("")}
      </ul>
      <p><strong>Total: €${order.payment.totalAmount.toFixed(2)}</strong></p>
      <br>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/track-order?ref=${order.orderReference}" class="button">Ver detalles del pedido</a>
      <br><br>
      <p>Un cordial saludo,</p>
      <p>Equipo Dolores Silicone</p>
    `;

    await sendEmail({
        to: order.customer.email,
        subject: `Confirmación de pedido - ${order.orderReference}`,
        html: generateEmailTemplate(customerContent),
    });
}

export async function sendOrderNotificationToAdmin(order: any) {
    const adminEmail = process.env.ADMIN_EMAIL || process.env.SMTP_USER;

    const adminContent = `
      <h2>Nuevo pedido recibido</h2>
      <p><strong>Referencia:</strong> ${order.orderReference}</p>
      <p><strong>Cliente:</strong> ${order.customer.name} (${order.customer.email})</p>
        <p><strong>Total:</strong> €${order.payment.totalAmount.toFixed(2)}</p>
      <br>
      <a href="${process.env.NEXT_PUBLIC_SITE_URL}/admin/orders/${order._id}" class="button">Ver pedido en el panel</a>
    `;

    await sendEmail({
        to: adminEmail as string,
        subject: `Nuevo pedido recibido - ${order.orderReference}`,
        html: generateEmailTemplate(adminContent),
    });
}

export async function sendOrderUpdateEmail(to: string, subject: string, message: string, attachments?: any[]) {
    const updateContent = `
      <div style="font-family: sans-serif; color: #333;">
        ${message.replace(/\n/g, "<br>")}
        <br><br>
        <hr>
        <p style="font-size: 12px; color: #888;">Dolores Silicone</p>
      </div>
    `;

    await sendEmail({
        to,
        subject,
        html: generateEmailTemplate(updateContent),
        attachments: attachments || []
    });
}
