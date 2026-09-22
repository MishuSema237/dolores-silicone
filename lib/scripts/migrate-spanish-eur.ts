/**
 * Migration: Dolores Silicone → English / USD
 *
 * Applies English translations to the entire database:
 *  1. Products:   normalizes categories to the model enum
 *     (boys | girls | accessories) and translates all fields.
 *  2. Blogs:      translates title, excerpt, category and content.
 *  3. Reviews:    translates comments (keeps the customer name).
 *  4. Testimonials: translates role and content.
 *  5. Content blocks: translates title and content.
 *
 * Prices are kept unchanged (amounts stay the same; the currency
 * symbol is '$' at display time).
 *
 * Not touched: orders, messages or customers (real user data).
 *
 * Run: npx tsx lib/scripts/migrate-spanish-eur.ts
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

const GBP_TO_EUR = 1.0;

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
  if (!uri) throw new Error("MONGODB_URI not set in .env.local");

  await mongoose.connect(uri);
  console.log("✅ Connected to MongoDB");

  // ── 1. PRODUCTOS ─────────────────────────────────────────────────
  console.log("\n━━━ PRODUCTS ━━━");
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
        `  ✅ ${slug}: ${p.price} → ${updates.price !== undefined ? updates.price : p.price} $ | cat: ${p.category} → ${updates.category || p.category}`
      );
    }
  }

  console.log(`Products: ${productsUpdated} updated (${productsWithTranslation} with translation)`);

  // ── 2. BLOGS ─────────────────────────────────────────────────────
  console.log("\n━━━ BLOGS ━━━");
  const blogs = await Blog.find({}).lean();
  let blogsUpdated = 0;

  for (const b of blogs) {
    const t = blogTranslations[b.slug];
    if (!t) {
      console.log(`  ⏭  No translation: ${b.slug}`);
      continue;
    }
    await Blog.updateOne(
      { _id: b._id },
      { $set: { title: t.title, excerpt: t.excerpt, category: t.category, content: t.content } }
    );
    blogsUpdated++;
    console.log(`  ✅ ${b.slug}`);
  }
  console.log(`Blogs: ${blogsUpdated} updated`);

  // ── 3. REVIEWS ───────────────────────────────────────────────────
  console.log("\n━━━ REVIEWS ━━━");
  const reviews = await Review.find({}).lean();
  let reviewsUpdated = 0;
  let reviewsSkipped = 0;

  for (const r of reviews) {
    const t = reviewTranslations[r.customer];
    if (!t) {
      reviewsSkipped++;
      console.log(`  ⏭  No translation: ${r.customer}`);
      continue;
    }
    await Review.updateOne({ _id: r._id }, { $set: { comment: t.comment } });
    reviewsUpdated++;
    console.log(`  ✅ ${r.customer}`);
  }
  console.log(`Reviews: ${reviewsUpdated} updated, ${reviewsSkipped} without translation`);

  // ── 4. TESTIMONIALS ──────────────────────────────────────────────
  console.log("\n━━━ TESTIMONIALS ━━━");
  const testimonials = await Testimonial.find({}).lean();
  let testimonialsUpdated = 0;

  for (const tst of testimonials) {
    const t = testimonialTranslations[tst.name];
    if (!t) {
      console.log(`  ⏭  No translation: ${tst.name}`);
      continue;
    }
    await Testimonial.updateOne({ _id: tst._id }, { $set: { role: t.role, content: t.content } });
    testimonialsUpdated++;
    console.log(`  ✅ ${tst.name}`);
  }
  console.log(`Testimonials: ${testimonialsUpdated} updated`);

  // ── 5. CONTENT BLOCKS ────────────────────────────────────────────
  console.log("\n━━━ CONTENT BLOCKS ━━━");
  const contentBlocks = await ContentBlock.find({}).lean();
  let contentBlocksUpdated = 0;

  for (const cb of contentBlocks) {
    const t = contentBlockTranslations[cb.key];
    if (!t) {
      console.log(`  ⏭  No translation: ${cb.key}`);
      continue;
    }
    await ContentBlock.updateOne({ _id: cb._id }, { $set: { title: t.title, content: t.content } });
    contentBlocksUpdated++;
    console.log(`  ✅ ${cb.key}`);
  }
  console.log(`Content blocks: ${contentBlocksUpdated} updated`);

  // ── SUMMARY ──────────────────────────────────────────────────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📊 MIGRATION SUMMARY");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Products:     ${productsUpdated} updated`);
  console.log(`Blogs:        ${blogsUpdated} updated`);
  console.log(`Reviews:      ${reviewsUpdated} updated`);
  console.log(`Testimonials: ${testimonialsUpdated} updated`);
  console.log(`Content blk.: ${contentBlocksUpdated} updated`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  await mongoose.disconnect();
  console.log("\n✅ Migration completed.");
}

migrate().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
