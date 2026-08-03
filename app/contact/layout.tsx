import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con Dolores Silicone. Enviamos a todo el mundo y estaremos encantados de responder cualquier pregunta sobre nuestras muñecas reborn de silicona hechas a mano.",
  keywords: [
    "contacto Dolores Silicone",
    "consulta sobre muñecas reborn",
    "pedido de muñeca reborn personalizada",
    "preguntas sobre muñecas de silicona",
    "WhatsApp Dolores Silicone",
    "contacto tienda de muñecas reborn",
  ],
  openGraph: {
    title: "Contacto | Dolores Silicone",
    description:
      "Ponte en contacto con Dolores Silicone. Enviamos a todo el mundo y responderemos cualquier pregunta.",
    url: "https://doloressilicone.com/contact",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Contacto Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Dolores Silicone",
    description:
      "Ponte en contacto con Dolores Silicone. Enviamos a todo el mundo.",
    images: ["/assets/og-logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
