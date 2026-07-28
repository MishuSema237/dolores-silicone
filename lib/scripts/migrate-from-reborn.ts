/**
 * Migration script: Reborn (joanas-reborn-babies) → Dolores Silicone
 *
 * Transforms and seeds:
 * 1. Products (adds category from gender, USD→GBP)
 * 2. Testimonials → Reviews (renames fields)
 * 3. Gallery items (direct copy)
 */

import mongoose from "mongoose";

// ── Connection strings ──────────────────────────────────────────────
const SOURCE_URI =
  "mongodb+srv://mishusema237_db_user:1mishael@cluster0.ikwyaoe.mongodb.net/reborn_babies?retryWrites=true&w=majority";
const DEST_URI =
  "mongodb+srv://mishusema237_db_user:metrobooming@cluster0.htkqon9.mongodb.net/dolores_silicone?appName=Cluster0";

const USD_TO_GBP = 0.79;

// ── Minimal schemas (match both DBs) ────────────────────────────────
const SourceProductSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const SourceTestimonialSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const SourceGallerySchema = new mongoose.Schema({}, { strict: false, timestamps: true });

const DestProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    description: { type: String, required: true },
    detailedDescription: String,
    materialsAndCare: String,
    shippingInfo: String,
    images: { type: [String], default: [] },
    attributes: {
      hairColor: String,
      eyeColor: String,
      size: String,
      gender: String,
    },
    rating: { type: Number, min: 0, max: 5 },
    reviewCount: { type: Number, default: 0 },
    category: { type: String, enum: ["boys", "girls", "accessories"], default: "girls" },
    status: { type: String, enum: ["active", "inactive", "sold_out"], default: "active" },
    featured: { type: Boolean, default: false },
    testimonial: { quote: String, author: String, title: String },
  },
  { timestamps: true }
);

const DestReviewSchema = new mongoose.Schema(
  {
    customer: { type: String, required: true, trim: true },
    rating: { type: Number, required: true, min: 1, max: 5, default: 5 },
    comment: { type: String, required: true },
    image: String,
    status: { type: String, enum: ["Published", "Pending"], default: "Published" },
  },
  { timestamps: true }
);

const DestGallerySchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    imageUrl: { type: String, required: true },
    tags: { type: [String], default: [] },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// ── Helpers ─────────────────────────────────────────────────────────
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function deriveCategory(product: any): "boys" | "girls" | "accessories" {
  const gender = (product.attributes?.gender || "").toLowerCase();
  if (gender === "male" || gender === "boy") return "boys";
  if (product.name?.toLowerCase().includes("accessor")) return "accessories";
  return "girls"; // default
}

function transformProduct(source: any): any {
  return {
    name: source.name,
    slug: source.slug || generateSlug(source.name),
    price: Math.round(source.price * USD_TO_GBP * 100) / 100,
    description: source.description || "",
    detailedDescription: source.detailedDescription || "",
    materialsAndCare: source.materialsAndCare || "",
    shippingInfo: source.shippingInfo || "",
    images: source.images || [],
    attributes: source.attributes || {},
    rating: source.rating,
    reviewCount: source.reviewCount || 0,
    category: deriveCategory(source),
    status: source.status || "active",
    featured: source.featured || false,
    testimonial: source.testimonial || undefined,
  };
}

function transformTestimonial(source: any): any {
  return {
    customer: source.name || "Anonymous",
    rating: source.rating || 5,
    comment: source.content || "",
    image: source.image || undefined,
    status: "Published",
  };
}

// ── Main ────────────────────────────────────────────────────────────
async function main() {
  console.log("🔗 Connecting to source DB (reborn_babies)...");
  const sourceConn = await mongoose.createConnection(SOURCE_URI).asPromise();
  console.log("✅ Source connected");

  console.log("🔗 Connecting to destination DB (dolores_silicone)...");
  const destConn = await mongoose.createConnection(DEST_URI).asPromise();
  console.log("✅ Destination connected");

  const SourceProduct = sourceConn.model("Product", SourceProductSchema);
  const SourceTestimonial = sourceConn.model("Testimonial", SourceTestimonialSchema);
  const SourceGallery = sourceConn.model("GalleryItem", SourceGallerySchema);

  const DestProduct = destConn.model("Product", DestProductSchema);
  const DestReview = destConn.model("Review", DestReviewSchema);
  const DestGallery = destConn.model("GalleryItem", DestGallerySchema);

  // ── 1. Products ─────────────────────────────────────────────────
  console.log("\n━━━ PRODUCTS ━━━");
  const sourceProducts = await SourceProduct.find({}).lean();
  console.log(`Found ${sourceProducts.length} products in source`);

  let productsCreated = 0;
  let productsSkipped = 0;

  for (const sp of sourceProducts) {
    const transformed = transformProduct(sp);

    // Check if already exists by slug
    const exists = await DestProduct.findOne({ slug: transformed.slug });
    if (exists) {
      console.log(`  ⏭  Skipped (exists): ${transformed.name}`);
      productsSkipped++;
      continue;
    }

    // Ensure slug is unique
    let slug = transformed.slug;
    let counter = 1;
    while (await DestProduct.findOne({ slug })) {
      slug = `${transformed.slug}-${counter}`;
      counter++;
    }
    transformed.slug = slug;

    await DestProduct.create(transformed);
    console.log(`  ✅ Created: ${transformed.name} [${transformed.category}] £${transformed.price}`);
    productsCreated++;
  }

  console.log(`Products: ${productsCreated} created, ${productsSkipped} skipped`);

  // ── 2. Testimonials → Reviews ───────────────────────────────────
  console.log("\n━━━ TESTIMONIALS → REVIEWS ━━━");
  const sourceTestimonials = await SourceTestimonial.find({}).lean();
  console.log(`Found ${sourceTestimonials.length} testimonials in source`);

  let reviewsCreated = 0;
  let reviewsSkipped = 0;

  for (const st of sourceTestimonials) {
    const transformed = transformTestimonial(st);

    // Skip if same customer + comment already exists
    const exists = await DestReview.findOne({
      customer: transformed.customer,
      comment: transformed.comment,
    });
    if (exists) {
      console.log(`  ⏭  Skipped (exists): ${transformed.customer}`);
      reviewsSkipped++;
      continue;
    }

    await DestReview.create(transformed);
    console.log(`  ✅ Created: ${transformed.customer} — ${transformed.rating}★`);
    reviewsCreated++;
  }

  console.log(`Reviews: ${reviewsCreated} created, ${reviewsSkipped} skipped`);

  // ── 3. Gallery ──────────────────────────────────────────────────
  console.log("\n━━━ GALLERY ━━━");
  const sourceGallery = await SourceGallery.find({}).lean();
  console.log(`Found ${sourceGallery.length} gallery items in source`);

  let galleryCreated = 0;
  let gallerySkipped = 0;

  for (const sg of sourceGallery) {
    // Skip if same imageUrl already exists
    const exists = await DestGallery.findOne({ imageUrl: sg.imageUrl });
    if (exists) {
      gallerySkipped++;
      continue;
    }

    await DestGallery.create({
      title: sg.title || undefined,
      description: sg.description || undefined,
      imageUrl: sg.imageUrl,
      tags: sg.tags || [],
      featured: sg.featured || false,
      order: sg.order || 0,
    });
    console.log(`  ✅ Created: ${sg.title || sg.imageUrl.split("/").pop()}`);
    galleryCreated++;
  }

  console.log(`Gallery: ${galleryCreated} created, ${gallerySkipped} skipped`);

  // ── Summary ─────────────────────────────────────────────────────
  console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📊 MIGRATION SUMMARY");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log(`Products:  ${productsCreated} created, ${productsSkipped} skipped`);
  console.log(`Reviews:   ${reviewsCreated} created, ${reviewsSkipped} skipped`);
  console.log(`Gallery:   ${galleryCreated} created, ${gallerySkipped} skipped`);
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

  await sourceConn.close();
  await destConn.close();
  console.log("\n✅ Done. Connections closed.");
}

main().catch((err) => {
  console.error("❌ Migration failed:", err);
  process.exit(1);
});
