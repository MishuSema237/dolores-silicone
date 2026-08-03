import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opiniones",
  description:
    "Lee opiniones y experiencias genuinas de clientes con las muñecas reborn de silicona hechas a mano de Dolores Silicone. Descubre por qué los coleccionistas aman nuestros bebés de silicona realistas.",
  keywords: [
    "opiniones de muñecas reborn",
    "opiniones de Dolores Silicone",
    "testimonios de bebés reborn de silicona",
    "comentarios de clientes de muñecas reborn",
    "opiniones de muñecas bebé realistas",
    "mejores muñecas reborn opiniones",
  ],
  openGraph: {
    title: "Opiniones de Clientes | Dolores Silicone",
    description:
      "Lee opiniones y experiencias genuinas de clientes con las muñecas reborn de silicona hechas a mano de Dolores Silicone.",
    url: "https://doloressilicone.com/reviews",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Opiniones de Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Opiniones de Clientes | Dolores Silicone",
    description:
      "Lee opiniones y experiencias genuinas de clientes con las muñecas reborn de silicona hechas a mano de Dolores Silicone.",
    images: ["/assets/og-logo.png"],
  },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
