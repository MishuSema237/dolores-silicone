import mongoose from "mongoose";

const DEST_URI = process.env.MONGODB_URI || "";

const ProductSchema = new mongoose.Schema(
  { slug: String, name: String, category: String, attributes: { gender: String } },
  { strict: false, timestamps: true }
);

const BOY_NAMES = [
  "lucas", "liam", "kyro", "ethan", "leo", "zaylen", "logan", "milo",
  "bryan", "carlos", "josh", "toby", "lucase", "carter", "gabriel",
  "micheal", "asher", "marshall", "marshal", "nathan", "noah", "brooks",
  "cole", "james", "daniel", "alex", "vans",
];

function isBoyName(name: string): boolean {
  const lower = name.toLowerCase();
  return BOY_NAMES.some((n) => lower.includes(n));
}

async function main() {
  const conn = await mongoose.createConnection(DEST_URI).asPromise();
  const Product = conn.model("Product", ProductSchema);

  const products = await Product.find({}).lean();
  let updated = 0;

  for (const p of products) {
    if (p.category !== "girls") continue;
    if (isBoyName(p.name)) {
      await Product.findByIdAndUpdate(p._id, { category: "boys" });
      console.log(`  ✅ ${p.name} → boys`);
      updated++;
    }
  }

  console.log(`\nUpdated ${updated} products to boys category`);
  await conn.close();
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
