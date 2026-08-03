/**
 * Migración: Dolores Silicone → Español / EUR
 *
 * Convierte toda la base de datos a español y euro:
 *  1. Productos:  precio × 1.17 (GBP → EUR), normaliza categorías al enum
 *     del modelo (boys | girls | accessories) y traduce todos los campos.
 *  2. Blogs:      traduce título, extracto, categoría y contenido.
 *  3. Reseñas:    traduce los comentarios (mantiene el nombre del cliente).
 *  4. Testimonios: traduce rol y contenido.
 *  5. Bloques de contenido: traduce título y contenido.
 *
 * No se tocan: pedidos, mensajes ni clientes (datos reales de usuarios).
 *
 * Ejecutar: npx tsx lib/scripts/migrate-spanish-eur.ts
 */

import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

import mongoose from "mongoose";
import Product from "../models/Product";
import Blog from "../models/Blog";
import Review from "../models/Review";
import Testimonial from "../models/Testimonial";
import ContentBlock from "../models/ContentBlock";
import { productTranslations } from "./data/product-es";
import { blogTranslations } from "./data/blog-es";
import { reviewTranslations, testimonialTranslations, contentBlockTranslations } from "./data/reviews-es";

const GBP_TO_EUR = 1.17;

function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

function normalizeCategory(cat: string): string {
  if (cat === "baby") return "girls";
  if (cat === "accessory") return "accessories";
  return cat;
}

interface ProductUpdates {
  price?: number;
  category?: string;
  name?: string;
  description?: string;
  detailedDescription?: string;
  materialsAndCare?: string;
  shippingInfo?: string;
  attributes?: Record<string, string | undefined>;
}

async function migrate() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI no definida en .env.local");

  await mongoose.connect(uri);
  console.log("✅ Conectado a MongoDB");

  // ── 1. PRODUCTOS ─────────────────────────────────────────────────
  console.log("\n━━━ PRODUCTOS ━━━");
  const products = await Product.find({}).lean();
  let productsUpdated = 0;
  let productsWithTranslation = 0;

  for (const p of products) {
    const slug = p.slug;
    const t = productTranslations[slug];
    const updates: ProductUpdates = {};

    if (typeof p.price === "number") {
      updates.price = round2(p.price * GBP_TO_EUR);
    }

    const newCategory = normalizeCategory(p.category);
    if (newCategory !== p.category) {
      updates.category = newCategory;
    }

    if (t) {
      productsWithTranslation++;
      if (t.name) updates.name = t.name;
      if (t.description) updates.description = t.description;
      if (t.detailedDescription !== undefined) updates.detailedDescription = t.detailedDescription;
      if (t.materialsAndCare !== undefined) updates.materialsAndCare = t.materialsAndCare;
      if (t.shippingInfo !== undefined) updates.shippingInfo = t.shippingInfo;
      if (t.attributes) {
        const attrs: Record<string, string> = {};
        for (const key of ["hairColor", "eyeColor", "size", "gender"] as const) {
          const val = t.attributes[key];
          if (val !== undefined) attrs[key] = val;
        }
        updates.attributes = { ...(p.attributes || {}), ...attrs };
      }
    }

    if (Object.keys(updates).length > 0) {
      await Product.updateOne({ _id: p._id }, { $set: updates });
      productsUpdated++;
      console.log(
        `  ✅ ${slug}: ${p.price} → ${updates.price !== undefined ? updates.price : p.price} € | cat: ${p.category} → ${updates.category || p.category}`
      );
    }
  }

  console.log(`Productos: ${productsUpdated} actualizados (${productsWithTranslation} con traducción)`);

  // ── 2. BLOGS ─────────────────────────────────────────────────────
  console.log("\n━━━ BLOGS ━━━");
  const blogs = await Blog.find({}).lean();
  let blogsUpdated = 0;

  for (const b of blogs) {
    const t = blogTranslations[b.slug];
    if (!t) {
      console.log(`  ⏭  Sin traducción: ${b.slug}`);
      continue;
    }
    await Blog.updateOne(
      { _id: b._id },
      { $set: { title: t.title, excerpt: t.excerpt, category: t.category, content: t.content } }
    );
    blogsUpdated++;
    console.log(`  ✅ ${b.slug}`);
  }
  console.log(`Blogs: ${blogsUpdated} actualizados`);

  // ── 3. RESEÑAS ───────────────────────────────────────────────────
  console.log("\n━━━ RESEÑAS ━━━");
  const reviews = await Review.find({}).lean();
  let reviewsUpdated = 0;
  let reviewsSkipped = 0;

  for (const r of reviews) {
    const t = reviewTranslations[r.customer];
    if (!t) {
      reviewsSkipped++;
      console.log(`  ⏭  Sin traducción: ${r.customer}`);
      continue;
    }
    await Review.updateOne({ _id: r._id }, { $set: { comment: t.comment } });
    reviewsUpdated++;
    console.log(`  ✅ ${r.customer}`);
  }
  console.log(`Reseñas: ${reviewsUpdated} actualizadas, ${reviewsSkipped} sin traducción`);

  // ── 4. TESTIMONIOS ───────────────────────────────────────────────
  console.log("\n━━━ TESTIMONIOS ━━━");
  const testimonials = await Testimonial.find({}).lean();
  let testimonialsUpdated = 0;

  for (const tst of testimonials) {
    const t = testimonialTranslations[tst.name];
    if (!t) {
      console.log(`  ⏭  Sin traducción: ${tst.name}`);
      continue;
    }
    await Testimonial.updateOne({ _id: tst._id }, { $set: { role: t.role, content: t.content } });
    testimonialsUpdated++;
    console.log(`  ✅ ${tst.name}`);
  }
  console.log(`Testimonios: ${testimonialsUpdated} actualizados`);

  // ── 5. BLOQUES DE CONTENIDO ──────────────────────────────────────
  console.log("\n━━━ BLOQUES DE CONTENIDO ━━━");
  const contentBlocks = await ContentBlock.find({}).lean();
  let contentBlocksUpdated = 0;

  for (const cb of contentBlocks) {
    const t = contentBlockTranslations[cb.key];
    if (!t) {
      console.log(`  ⏭  Sin traducción: ${cb.key}`);
      continue;
    }
    await ContentBlock.updateOne({ _id: cb._id }, { $set: { title: t.title, content: t.content } });
    contentBlocksUpdated++;
    console.log(`  ✅ ${cb.key}`);
  }
  console.log(`Bloques de contenido: ${contentBlocksUpdated} actualizados`);

  // ── RESUMEN ──────────────────────────────────────────────────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📊 RESUMEN DE MIGRACIÓN");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Productos:      ${productsUpdated} actualizados`);
  console.log(`Blogs:          ${blogsUpdated} actualizados`);
  console.log(`Reseñas:        ${reviewsUpdated} actualizadas`);
  console.log(`Testimonios:    ${testimonialsUpdated} actualizados`);
  console.log(`Bloques cont.:  ${contentBlocksUpdated} actualizados`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  await mongoose.disconnect();
  console.log("\n✅ Migración completada.");
}

migrate().catch((err) => {
  console.error("❌ Migración falló:", err);
  process.exit(1);
});
