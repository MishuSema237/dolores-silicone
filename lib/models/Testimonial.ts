import mongoose from "mongoose";

export interface ITestimonial {
    name: string;
    role: string;
    content: string;
    rating: number;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
}

const TestimonialSchema = new mongoose.Schema<ITestimonial>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        role: {
            type: String,
            required: true,
            trim: true,
        },
        content: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5,
            default: 5,
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const Testimonial = (mongoose.models.Testimonial as mongoose.Model<ITestimonial>) ||
    mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);

export default Testimonial;
