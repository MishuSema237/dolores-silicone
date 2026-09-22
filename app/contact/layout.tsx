import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dolores Silicone. We ship worldwide and would be delighted to answer any questions about our handmade silicone reborn dolls.",
  keywords: [
    "contact Dolores Silicone",
    "reborn doll inquiry",
    "custom reborn doll order",
    "silicone doll questions",
    "WhatsApp Dolores Silicone",
    "reborn doll shop contact",
  ],
  openGraph: {
    title: "Contact | Dolores Silicone",
    description:
      "Get in touch with Dolores Silicone. We ship worldwide and will answer any questions.",
    url: "https://doloressilicone.com/contact",
    siteName: "Dolores Silicone",
    images: [
      {
        url: "/assets/og-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Dolores Silicone",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Dolores Silicone",
    description:
      "Get in touch with Dolores Silicone. We ship worldwide.",
    images: ["/assets/og-logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}