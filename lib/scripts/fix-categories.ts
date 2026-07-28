import mongoose from "mongoose";

const DEST_URI = process.env.MONGODB_URI || "";

const ProductSchema = new mongoose.Schema(
  { slug: String, name: String, category: String },
  { strict: false, timestamps: true }
);

async function main() {
  const conn = await mongoose.createConnection(DEST_URI).asPromise();
  const Product = conn.model("Product", ProductSchema);

  // Fix false positives
  const fixNames = ["Sophie Nicole", "Emma Cleo"];
  for (const name of fixNames) {
    const result = await Product.findOneAndUpdate(
      { name },
      { category: "girls" }
    );
    if (result) console.log(`  ✅ Fixed ${name} → girls`);
  }

  // Show final counts
  const girls = await Product.countDocuments({ category: "girls" });
  const boys = await Product.countDocuments({ category: "boys" });
  const acc = await Product.countDocuments({ category: "accessories" });
  console.log(`\nFinal: ${girls} girls, ${boys} boys, ${acc} accessories`);

  await conn.close();
}

main().catch((err) => {
  console.error("❌ Failed:", err);
  process.exit(1);
});
