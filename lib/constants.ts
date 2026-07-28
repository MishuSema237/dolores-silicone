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
  email: "hello@doloressilicone.com",
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
