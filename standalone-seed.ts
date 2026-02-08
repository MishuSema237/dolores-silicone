import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config({ path: resolve(process.cwd(), ".env.local") });

const AdminUserSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, enum: ["admin", "super_admin"], default: "admin" },
    lastLogin: Date,
}, { timestamps: true });

AdminUserSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    } catch (error: any) {
        next(error);
    }
});

async function seed() {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) throw new Error("MONGODB_URI not found");

        await mongoose.connect(uri);
        console.log("Connected to MongoDB");

        const AdminUser = mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);

        const email = process.env.ADMIN_EMAIL || "admin@doloressilicone.com";
        const password = process.env.ADMIN_PASSWORD || "changeme123";

        const existing = await AdminUser.findOne({ email: email.toLowerCase() });
        if (existing) {
            console.log(`Admin user already exists: ${email}`);
            // Update password just in case synchronization was needed
            existing.password = password;
            await existing.save();
            console.log("Admin password updated successfully.");
        } else {
            await AdminUser.create({
                email: email,
                password: password,
                name: "Admin User",
                role: "super_admin",
            });
            console.log(`Created admin user: ${email}`);
        }

        console.log("✅ Standalone Seeding completed!");
        process.exit(0);
    } catch (error: any) {
        console.error("❌ Seeding failed:", error.message);
        process.exit(1);
    }
}

seed();
