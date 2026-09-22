export const BRAND = {
  name: "Dolores Silicone",
  tagline: "Handmade Silicone Reborn Dolls",
  description: "Handmade with love, bringing comfort and joy to your arms. Each baby is a unique masterpiece of therapeutic art.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://doloressilicone.com",
} as const;

export const WHATSAPP = {
  phone: "447380608611",
  displayPhone: "+44 738 060 8611",
  link: "https://wa.me/447380608611",
  preFilledMessage: "Hello Dolores Silicone! I have a question about your products.",
} as const;

export const CONTACT = {
  email: "support@doloressilicone.com",
  phone: "+44 738 060 8611",
  address: "Shipping worldwide",
} as const;

export const SOCIALS = {
  tiktok: "https://tiktok.com/@doloressilicone",
  facebook: "https://facebook.com/doloressilicone",
  instagram: "https://instagram.com/doloressilicone",
} as const;

export const PRODUCT_CATEGORIES = ["girls", "boys", "accessories"] as const;
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export const ORDER_STATUSES = [
  "new",
  "pending",
  "awaiting_deposit",
  "confirmed",
  "paid",
  "in_progress",
  "shipped",
  "completed",
  "cancelled",
] as const;

export const CURRENCY = "$";

export const SEO = {
  siteName: "Dolores Silicone",
  defaultTitle: "Dolores Silicone | Handmade Silicone Reborn Dolls",
  titleTemplate: "%s | Dolores Silicone",
  defaultDescription:
    "Handmade platinum silicone reborn dolls crafted with love. Each baby is a unique piece: hand-painted in 8–20+ layers, realistically weighted and CE certified.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://doloressilicone.com",
  keywords: [
    "silicone reborn dolls",
    "reborn dolls",
    "realistic dolls",
    "silicone baby dolls",
    "full body silicone reborn babies",
    "handmade reborn dolls",
    "buy reborn dolls online",
    "platinum silicone doll",
    "collectible reborn dolls",
    "hand-painted dolls",
    "realistically weighted dolls",
    "reborn dolls for sale",
    "reborn doll shop",
    "therapeutic reborn dolls",
    "grief therapy dolls",
    "dementia care dolls",
    "comfort dolls for anxiety",
  ],
  productKeywords: [
    "silicone reborn doll",
    "full body silicone baby",
    "reborn doll for sale",
    "realistic doll",
    "hand painted reborn",
    "weighted reborn baby",
    "realistic baby doll",
    "platinum silicone reborn",
    "CE certified reborn doll",
    "collectible reborn doll",
  ],
  blogKeywords: [
    "reborn doll care guide",
    "how to care for a silicone reborn doll",
    "vinyl vs silicone reborn dolls",
    "reborn collecting tips",
    "therapeutic uses of reborn dolls",
    "how reborn dolls are made",
    "reborn doll maintenance",
    "reborn beginner guide",
  ],
} as const;
