export const BRAND = {
  name: "Dolores Silicone",
  tagline: "Muñecas Reborn de Silicona Hechas a Mano",
  description: "Hechas a mano con amor, aportando consuelo y alegría a tus brazos. Cada bebé es una obra maestra única de arte terapéutico.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://doloressilicone.com",
} as const;

export const WHATSAPP = {
  phone: "447380608611",
  displayPhone: "+44 738 060 8611",
  link: "https://wa.me/447380608611",
  preFilledMessage: "¡Hola Dolores Silicone! Tengo una pregunta sobre sus productos.",
} as const;

export const CONTACT = {
  email: "support@doloressilicone.com",
  phone: "+44 738 060 8611",
  address: "Envíos a todo el mundo",
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

export const CURRENCY = "€";

export const SEO = {
  siteName: "Dolores Silicone",
  defaultTitle: "Dolores Silicone | Muñecas Reborn de Silicona Hechas a Mano",
  titleTemplate: "%s | Dolores Silicone",
  defaultDescription:
    "Muñecas reborn de silicona de platino hechas a mano con amor. Cada bebé es una pieza única: pintada a mano en 8–20+ capas, con peso realista y certificada CE.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://doloressilicone.com",
  keywords: [
    "muñecas reborn de silicona",
    "muñecas reborn",
    "muñecas realistas",
    "muñecas bebé de silicona",
    "bebés reborn de silicona a cuerpo completo",
    "muñecas reborn hechas a mano",
    "comprar muñecas reborn online",
    "muñeca de silicona de platino",
    "muñecas reborn de colección",
    "muñecas pintadas a mano",
    "muñecas con peso realista",
    "muñecas reborn en venta",
    "tienda de muñecas reborn",
    "muñecas reborn terapéuticas",
    "muñecas para terapia del duelo",
    "muñecas para cuidados de demencia",
    "muñecas de consuelo para ansiedad",
  ],
  productKeywords: [
    "muñeca reborn de silicona",
    "bebé de silicona a cuerpo completo",
    "muñeca reborn en venta",
    "muñeca realista",
    "reborn pintada a mano",
    "bebé reborn con peso",
    "muñeca bebé realista",
    "reborn de silicona de platino",
    "muñeca reborn certificada CE",
    "muñeca reborn de colección",
  ],
  blogKeywords: [
    "guía de cuidados de muñecas reborn",
    "cómo cuidar una muñeca reborn de silicona",
    "muñecas reborn de vinilo vs silicona",
    "consejos para coleccionar reborn",
    "usos terapéuticos de las muñecas reborn",
    "cómo se hacen las muñecas reborn",
    "mantenimiento de muñecas reborn",
    "guía para principiantes de reborn",
  ],
} as const;
