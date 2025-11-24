import mongoose from "mongoose";

const HeroImageSchema = new mongoose.Schema(
    {
        imageUrl: {
            type: String,
            required: [true, "Please provide an image URL"],
        },
        title: {
            type: String,
            required: [true, "Please provide a title"],
        },
        subtitle: {
            type: String,
        },
        link: {
            type: String,
            default: "/shop",
        },
        order: {
            type: Number,
            default: 0,
        },
        active: {
            type: Boolean,
            default: true,
        },
    },
    { timestamps: true }
);

export default mongoose.models.HeroImage ||
    mongoose.model("HeroImage", HeroImageSchema);
