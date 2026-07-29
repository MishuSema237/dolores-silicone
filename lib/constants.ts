export const BRAND = {
  name: "Dolores Silicone",
  tagline: "Handcrafted Silicone Reborn Babies",
  description: "Handcrafted with love, bringing comfort and joy to your arms. Each baby is a unique masterpiece of healing art.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://dolores-silicone.vercel.app",
} as const;

export const WHATSAPP = {
  phone: "447380608611",
  displayPhone: "+44 738 060 8611",
  link: "https://wa.me/447380608611",
  preFilledMessage: "Hello Dolores Silicone! I have a question about your products.",
} as const;

export const CONTACT = {
  email: "siliconedolores@gmail.com",
  phone: "+44 738 060 8611",
  address: "Worldwide",
} as const;

export const SOCIALS = {
  tiktok: "https://tiktok.com/@doloressilicone",
  facebook: "https://facebook.com/doloressilicone",
  instagram: "https://instagram.com/doloressilicone",
} as const;

export const PRODUCT_CATEGORIES = ["boys", "girls", "accessories"] as const;
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

export const CURRENCY = "£";

export const SEO = {
  siteName: "Dolores Silicone",
  defaultTitle: "Dolores Silicone | Handcrafted Silicone Reborn Baby Dolls UK",
  titleTemplate: "%s | Dolores Silicone",
  defaultDescription:
    "Handcrafted platinum silicone reborn baby dolls made with love in the UK. Each baby is a one-of-a-kind masterpiece — hand-painted in 8–20+ layers, weighted for realism, and CE certified safe.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://dolores-silicone.vercel.app",
  keywords: [
    "silicone reborn baby dolls UK",
    "reborn baby dolls",
    "realistic baby dolls",
    "lifelike baby dolls",
    "full body silicone baby doll",
    "handcrafted reborn babies UK",
    "buy reborn baby doll online UK",
    "platinum silicone baby doll",
    "collectible reborn dolls",
    "hand-painted baby dolls",
    "weighted baby dolls",
    "reborn dolls for sale UK",
    "reborn baby doll shop",
    "therapeutic reborn dolls",
    "grief therapy dolls",
    "dementia care dolls",
    "anxiety comfort dolls",
  ],
  productKeywords: [
    "silicone reborn baby doll",
    "full body silicone baby",
    "reborn baby doll for sale",
    "realistic baby doll UK",
    "hand-painted reborn",
    "weighted reborn baby",
    "lifelike baby doll",
    "platinum silicone reborn",
    "CE certified reborn doll",
    "collectible baby doll",
  ],
  blogKeywords: [
    "reborn doll care guide",
    "how to care for silicone reborn doll",
    "vinyl vs silicone reborn dolls",
    "reborn doll collecting tips",
    "reborn dolls therapeutic use",
    "how reborn dolls are made",
    "reborn doll maintenance",
    "beginner reborn doll guide",
  ],
} as const;
