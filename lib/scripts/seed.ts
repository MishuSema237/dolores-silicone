import dotenv from "dotenv";
import { resolve } from "path";

// Load .env.local file
dotenv.config({ path: resolve(process.cwd(), ".env.local") });

import connectDB from "../db/mongodb";
import Product from "../models/Product";
import AdminUser from "../models/AdminUser";
import ContentBlock from "../models/ContentBlock";

async function seed() {
  try {
    await connectDB();
    console.log("Connected to MongoDB");

    // Seed Products
    const products = [
      {
        name: "Ella - Realistic Newborn",
        slug: "ella-realistic-newborn",
        price: 1200,
        description:
          "Meet Ella, a beautifully crafted reborn silicone baby designed with intricate details to mimic a real newborn.",
        detailedDescription:
          "Ella is a full-body silicone baby, meticulously sculpted and painted by hand. She features rooted mohair, realistic skin tones, subtle veining, and delicate fingernails.",
        materialsAndCare:
          "Crafted from platinum cure silicone, known for its durability and realistic feel.",
        shippingInfo:
          "All reborn babies are shipped securely in custom packaging to ensure their safe arrival.",
        images: [],
        attributes: {
          hairColor: "Blonde",
          eyeColor: "Blue",
          size: "19 inches",
          gender: "Female",
        },
        rating: 4.9,
        reviewCount: 120,
        status: "active" as const,
        featured: true,
      },
      {
        name: "Liam - Peaceful Sleeper",
        slug: "liam-peaceful-sleeper",
        price: 1350,
        description: "A peaceful sleeping baby with realistic features.",
        images: [],
        attributes: {
          hairColor: "Brown",
          eyeColor: "Green",
          size: "20 inches",
          gender: "Male",
        },
        status: "active" as const,
        featured: true,
      },
      {
        name: "Hand-Knit Newborn Blanket",
        slug: "hand-knit-newborn-blanket",
        price: 45,
        description: "A soft, hand-knitted blanket in delicate pastel tones, perfectly sized for your reborn baby.",
        detailedDescription: "Crafted from premium cotton yarn, this blanket features a classic cable-knit pattern in soft pastel shades. Ideal for photo sessions and display.",
        images: [],
        category: "accessories" as const,
        status: "active" as const,
        featured: false,
      },
      {
        name: "Reborn Baby Bottle Set",
        slug: "reborn-baby-bottle-set",
        price: 25,
        description: "A set of realistic miniature baby bottles for display with your reborn doll.",
        detailedDescription: "Three finely detailed miniature bottles in clear, pink, and blue. Filled with non-toxic resin for a realistic weighted feel.",
        images: [],
        category: "accessories" as const,
        status: "active" as const,
        featured: false,
      },
    ];

    for (const productData of products) {
      const existing = await Product.findOne({ slug: productData.slug });
      if (!existing) {
        await Product.create(productData);
        console.log(`Created product: ${productData.name}`);
      } else {
        console.log(`Product already exists: ${productData.name}`);
      }
    }

    // Seed Admin User (change password after first login!)
    const adminEmail = process.env.ADMIN_EMAIL || "admin@doloressilicone.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "CHANGE_ME_BEFORE_DEPLOY";

    const existingAdmin = await AdminUser.findOne({ email: adminEmail });
    if (!existingAdmin) {
      await AdminUser.create({
        email: adminEmail,
        password: adminPassword, // Will be hashed by pre-save hook
        name: "Admin User",
        role: "super_admin",
      });
      console.log(`Created admin user: ${adminEmail}`);
      console.log(`⚠️  IMPORTANT: Change the default password!`);
    } else {
      console.log(`Admin user already exists: ${adminEmail}`);
    }

    // Seed Content Blocks
    const contentBlocks = [
      {
        key: "homepage_hero_title",
        type: "text" as const,
        title: "Hero Title",
        content: "Discover Our Lifelike Reborn Baby Collection",
        active: true,
        order: 1,
      },
      {
        key: "homepage_about_title",
        type: "text" as const,
        title: "About Section Title",
        content: "Crafting Dreams, One Baby at a Time",
        active: true,
        order: 2,
      },
    ];

    for (const blockData of contentBlocks) {
      const existing = await ContentBlock.findOne({ key: blockData.key });
      if (!existing) {
        await ContentBlock.create(blockData);
        console.log(`Created content block: ${blockData.key}`);
      }
    }

    console.log("✅ Seeding completed!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  }
}

seed();

