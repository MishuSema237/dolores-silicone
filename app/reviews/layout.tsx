import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews",
  description:
    "Read genuine customer reviews and experiences with Dolores Silicone handcrafted reborn baby dolls.",
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
