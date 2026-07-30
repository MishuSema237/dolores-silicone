import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dolores Silicone. We ship worldwide and are happy to answer any questions about our handcrafted silicone reborn babies.",
  keywords: [
    "contact Dolores Silicone",
    "reborn baby doll inquiry",
    "custom reborn doll order",
    "silicone baby doll questions",
    "Dolores Silicone WhatsApp",
    "reborn doll shop UK contact",
  ],
  openGraph: {
    title: "Contact Us | Dolores Silicone",
    description:
      "Get in touch with Dolores Silicone. We ship worldwide and are happy to answer any questions.",
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
    title: "Contact Us | Dolores Silicone",
    description:
      "Get in touch with Dolores Silicone. We ship worldwide.",
    images: ["/assets/og-logo.png"],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
