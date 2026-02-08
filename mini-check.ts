import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

async function check() {
    await mongoose.connect(process.env.MONGODB_URI!);
    const db = mongoose.connection.db;
    if (!db) return;
    const adminDocs = await db.collection("adminusers").find({}).toArray();
    console.log(`DB_NAME: ${db.databaseName}`);
    console.log(`ADMIN_COUNT: ${adminDocs.length}`);
    console.log(`ADMIN_EMAILS: ${adminDocs.map(d => d.email).join(",")}`);
    process.exit(0);
}
check();
