import mongoose from "mongoose";

const SocialMediaSchema = new mongoose.Schema(
    {
        platform: {
            type: String,
            required: [true, "Platform name is required"],
        },
        url: {
            type: String,
            required: [true, "URL is required"],
        },
        icon: {
            type: String, // Store icon name (e.g., "FaFacebook")
            required: [true, "Icon name is required"],
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.SocialMedia || mongoose.model("SocialMedia", SocialMediaSchema);
