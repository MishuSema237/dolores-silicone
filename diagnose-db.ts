import mongoose from "mongoose";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

async function diagnose() {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error("MONGODB_URI not found");

        await mongoose.connect(uri);
        const db = mongoose.connection.db;
        if (!db) {
            console.error("Database connection failed - db object is undefined");
            return;
        }
        console.log(`Checking database: ${db.databaseName}`);

        const collections = await db.listCollections().toArray();
        console.log("Collections:", collections.map(c => c.name));

        // Try to find ANY admin user
        const adminDocs = await db.collection("adminusers").find({}).toArray();
        console.log("Total docs in 'adminusers':", adminDocs.length);
        if (adminDocs.length > 0) {
            console.log("Emails in DB:", adminDocs.map(d => d.email));
        }

        process.exit(0);
    } catch (error: any) {
        console.error("Diagnosis failed:", error.message);
        process.exit(1);
    }
}

diagnose();
