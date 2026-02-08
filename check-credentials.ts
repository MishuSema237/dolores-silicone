import mongoose from "mongoose";
import AdminUser from "./lib/models/AdminUser";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

async function checkAdmin() {
    try {
        if (!process.env.MONGODB_URI) {
            console.error("MONGODB_URI not found");
            process.exit(1);
        }

        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");

        const admins = await AdminUser.find({}, "email");
        console.log("All Registered Admin Emails:", admins.map(a => a.email));

        const email = process.env.ADMIN_EMAIL;
        const password = process.env.ADMIN_PASSWORD;

        if (!email) {
            console.log("No ADMIN_EMAIL in .env.local, checking for default 'admin@doloressilicone.com'");
        }

        const testEmail = email || "admin@doloressilicone.com";
        const admin = await AdminUser.findOne({ email: testEmail.toLowerCase() });

        if (!admin) {
            console.log(`Admin user NOT FOUND for email: ${email}`);
            console.log("You may need to run: npm run seed");
        } else {
            console.log(`Admin user FOUND: ${admin.email}`);
            const isValid = await admin.comparePassword(password || "");
            console.log(`Password is ${isValid ? "VALID" : "INVALID"}`);

            if (!isValid) {
                console.log("The hashed password in DB does not match 'changeme123'.");
                console.log("This can happen if the password was changed or if the hashing salt differs.");
            }
        }

        await mongoose.disconnect();
    } catch (error) {
        console.error("Check failed:", error);
    }
}

checkAdmin();
