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
        name: "Ella – Recién Nacida Realista",
        slug: "ella-realistic-newborn",
        price: 1404,
        description:
          "Conoce a Ella, una bebé reborn de silicona bellamente elaborada con detalles intrincados que imitan a un recién nacido real.",
        detailedDescription:
          "Ella es una bebé de silicona de cuerpo completo, meticulosamente esculpida y pintada a mano. Tiene mohair implantado, tonos de piel realistas, vetas sutiles y uñas delicadas.",
        materialsAndCare:
          "Creada con silicona de curado con platino, conocida por su durabilidad y sensación realista.",
        shippingInfo:
          "Todos los bebés reborn se envían de forma segura en empaques personalizados para garantizar su llegada en perfecto estado.",
        images: [],
        attributes: {
          hairColor: "Rubio",
          eyeColor: "Azules",
          size: "19 pulgadas",
          gender: "Niña",
        },
        rating: 4.9,
        reviewCount: 120,
        status: "active" as const,
        featured: true,
      },
      {
        name: "Liam – Duerme Plácidamente",
        slug: "liam-peaceful-sleeper",
        price: 1579.5,
        description: "Un bebé dormido y tranquilo con rasgos realistas.",
        images: [],
        attributes: {
          hairColor: "Castaño",
          eyeColor: "Verdes",
          size: "20 pulgadas",
          gender: "Niño",
        },
        category: "boys" as const,
        status: "active" as const,
        featured: true,
      },
      {
        name: "Manta de Recién Nacido Tejida a Mano",
        slug: "hand-knit-newborn-blanket",
        price: 52.65,
        description: "Una manta suave tejida a mano en delicados tonos pastel, perfecta para tu bebé reborn.",
        detailedDescription: "Creada con hilo premium de algodón, esta manta presenta un clásico patrón de punto de cable en suaves tonos pastel. Ideal para sesiones de fotos y exhibición.",
        images: [],
        category: "accessories" as const,
        status: "active" as const,
        featured: false,
      },
      {
        name: "Set de Biberones para Muñeca Reborn",
        slug: "reborn-baby-bottle-set",
        price: 29.25,
        description: "Un set de biberones en miniatura realistas para exhibir con tu muñeca reborn.",
        detailedDescription: "Tres biberones en miniatura finamente detallados en transparente, rosa y azul. Rellenos con resina no tóxica para una sensación de peso realista.",
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
    const adminEmail = process.env.ADMIN_EMAIL || "support@doloressilicone.com";
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
        title: "Título del Héroe",
        content: "Descubre Nuestra Colección de Bebés Reborn Realistas",
        active: true,
        order: 1,
      },
      {
        key: "homepage_about_title",
        type: "text" as const,
        title: "Título de la Sección Acerca de",
        content: "Creando Sueños, un Bebé a la Vez",
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

