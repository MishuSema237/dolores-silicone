/**
 * Test MongoDB connection
 * Run with: npx tsx lib/scripts/test-connection.ts
 */

const { config } = require("dotenv");
const { resolve } = require("path");

// Load .env.local file
config({ path: resolve(process.cwd(), ".env.local") });

import connectDB from "@/lib/db/mongodb";

async function testConnection() {
  try {
    console.log("Testing MongoDB connection...");
    await connectDB();
    console.log("✅ Successfully connected to MongoDB!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Connection failed:", error);
    process.exit(1);
  }
}

testConnection();

