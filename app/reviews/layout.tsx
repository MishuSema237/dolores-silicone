import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read genuine customer reviews and experiences with Dolores Silicone handcrafted reborn baby dolls. See why collectors love our lifelike silicone babies.",
  keywords: [
    "reborn baby doll reviews",
    "Dolores Silicone reviews",
    "silicone reborn baby testimonials",
    "reborn doll customer feedback",
    "lifelike baby doll reviews UK",
    "best reborn dolls reviews",
  ],
  openGraph: {
    title: "Customer Reviews | Dolores Silicone",
    description:
      "Read genuine customer reviews and experiences with Dolores Silicone handcrafted reborn baby dolls.",
    url: "https://dolores-silicone.vercel.app/reviews",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Dolores Silicone Reviews",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Customer Reviews | Dolores Silicone",
    description:
      "Read genuine customer reviews and experiences with Dolores Silicone handcrafted reborn baby dolls.",
    images: ["/assets/og-logo.png"],
  },
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
