import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Insights into the world of reborn artistry, silicone baby care, therapeutic uses, and the craft behind every Dolores creation. Expert guides and tips.",
  keywords: [
    "reborn doll blog",
    "silicone baby care guide",
    "reborn doll tips",
    "reborn doll collecting",
    "therapeutic reborn dolls",
    "vinyl vs silicone dolls",
    "reborn doll maintenance",
    "how reborn dolls are made",
  ],
  openGraph: {
    title: "Journal | Dolores Silicone",
    description:
      "Insights into the world of reborn artistry, silicone baby care, therapeutic uses, and the craft behind every Dolores creation.",
    url: "https://doloressilicone.com/blog",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Dolores Silicone Journal",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Dolores Silicone",
    description:
      "Insights into the world of reborn artistry, silicone baby care, and the craft behind every Dolores creation.",
    images: ["/assets/og-logo.png"],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
