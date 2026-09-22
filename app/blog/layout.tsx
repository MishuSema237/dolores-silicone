import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights into the world of reborn art, silicone baby care, therapeutic uses, and the craftsmanship behind every Dolores creation. Guides and expert tips.",
  keywords: [
    "reborn dolls blog",
    "silicone baby care guide",
    "reborn dolls tips",
    "reborn doll collecting",
    "therapeutic reborn dolls",
    "vinyl vs silicone dolls",
    "reborn doll maintenance",
    "how reborn dolls are made",
  ],
  openGraph: {
    title: "Blog | Dolores Silicone",
    description:
      "Insights into the world of reborn art, silicone baby care, therapeutic uses, and the craftsmanship behind every Dolores creation.",
    url: "https://doloressilicone.com/blog",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Dolores Silicone blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Dolores Silicone",
    description:
      "Insights into the world of reborn art, silicone baby care, and the craftsmanship behind every Dolores creation.",
    images: ["/assets/og-logo.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
