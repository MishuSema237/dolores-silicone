import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Perspectivas sobre el mundo del arte reborn, el cuidado de los bebés de silicona, los usos terapéuticos y la artesanía detrás de cada creación de Dolores. Guías y consejos de expertos.",
  keywords: [
    "blog de muñecas reborn",
    "guía de cuidado de bebés de silicona",
    "consejos sobre muñecas reborn",
    "coleccionismo de muñecas reborn",
    "muñecas reborn terapéuticas",
    "muñecas de vinilo vs silicona",
    "mantenimiento de muñecas reborn",
    "cómo se hacen las muñecas reborn",
  ],
  openGraph: {
    title: "Blog | Dolores Silicone",
    description:
      "Perspectivas sobre el mundo del arte reborn, el cuidado de los bebés de silicona, los usos terapéuticos y la artesanía detrás de cada creación de Dolores.",
    url: "https://doloressilicone.com/blog",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Blog de Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Dolores Silicone",
    description:
      "Perspectivas sobre el mundo del arte reborn, el cuidado de los bebés de silicona y la artesanía detrás de cada creación de Dolores.",
    images: ["/assets/og-logo.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
