/**
 * Seed script: Reemplaza los posts existentes con contenido en español
 * sobre muñecas reborn de silicona. Cada post tiene una fecha distinta.
 * El contenido se toma de lib/scripts/data/blog-es.ts.
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
  console.log("🔗 Conectando a la BD de destino...");
  const conn = await mongoose.createConnection(DEST_URI).asPromise();
  console.log("✅ Conectado");

  const Blog = conn.model("Blog", BlogSchema);

  // Eliminar posts existentes
  const deleteResult = await Blog.deleteMany({});
  console.log(`\n🗑  Eliminados ${deleteResult.deletedCount} posts existentes`);

  // Crear nuevos posts
  let created = 0;
  for (const post of POSTS) {
    const t = blogTranslations[post.slug];
    if (!t) {
      console.log(`  ⚠️  Sin traducción para: ${post.slug}`);
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
    console.log(`  ✅ Creado: "${t.title}" (${post.publishedAt.toISOString().split("T")[0]})`);
    created++;
  }

  console.log(`\n📊 Creados ${created} posts`);
  await conn.close();
  console.log("✅ Listo.");
}

main().catch((err) => {
  console.error("❌ Falló:", err);
  process.exit(1);
});
