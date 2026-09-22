/**
 * Seed script: Replaces existing posts with English content
 * about silicone reborn dolls. Each post has a different date.
 * Content is taken from lib/scripts/data/blog-es.ts.
 */

import mongoose from "mongoose";

const DEST_URI = process.env.MONGODB_URI || "";

const BlogSchema = new mongoose.Schema(
  {},
  { strict: false, timestamps: true }
);

import { blogTranslations } from "./data/blog-es";

const POSTS = [
  {
    slug: "complete-guide-caring-silicone-reborn-baby-doll",
    publishedAt: new Date("2026-03-15"),
  },
  {
    slug: "vinyl-vs-silicone-reborn-dolls-difference",
    publishedAt: new Date("2026-04-02"),
  },
  {
    slug: "5-common-mistakes-new-reborn-doll-owners",
    publishedAt: new Date("2026-04-20"),
  },
  {
    slug: "therapeutic-power-reborn-dolls-grief-anxiety-dementia",
    publishedAt: new Date("2026-05-10"),
  },
  {
    slug: "how-reborn-dolls-are-made-art-silicone-sculpting",
    publishedAt: new Date("2026-06-05"),
  },
  {
    slug: "starting-first-reborn-doll-collection-beginners-guide",
    publishedAt: new Date("2026-07-12"),
  },
];

async function main() {
  console.log("🔗 Connecting to destination DB...");
  const conn = await mongoose.createConnection(DEST_URI).asPromise();
  console.log("✅ Connected");

  const Blog = conn.model("Blog", BlogSchema);

  // Delete existing posts
  const deleteResult = await Blog.deleteMany({});
  console.log(`\n🗑  Deleted ${deleteResult.deletedCount} existing posts`);

  // Create new posts
  let created = 0;
  for (const post of POSTS) {
    const t = blogTranslations[post.slug];
    if (!t) {
      console.log(`  ⚠️  No translation for: ${post.slug}`);
      continue;
    }
    await Blog.create({
      title: t.title,
      slug: post.slug,
      excerpt: t.excerpt,
      category: t.category,
      author: "Dolores Silicone",
      image: "",
      status: "published",
      publishedAt: post.publishedAt,
      content: t.content,
    });
    console.log(`  ✅ Created: "${t.title}" (${post.publishedAt.toISOString().split("T")[0]})`);
    created++;
  }

  console.log(`\n📊 Created ${created} posts`);
  await conn.close();
  console.log("✅ Done.");
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
