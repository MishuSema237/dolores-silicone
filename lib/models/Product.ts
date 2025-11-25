import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProduct extends Document {
  name: string;
  slug: string;
  price: number;
  description: string;
  detailedDescription?: string;
  materialsAndCare?: string;
  shippingInfo?: string;
  images: string[];
  attributes?: {
    hairColor?: string;
    eyeColor?: string;
    size?: string;
    gender?: string;
  };
  rating?: number;
  reviewCount?: number;
  status: "active" | "inactive" | "sold_out";
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    description: {
      type: String,
      required: true,
    },
    detailedDescription: String,
    materialsAndCare: String,
    shippingInfo: String,
    images: {
      type: [String],
      default: [],
    },
    attributes: {
      hairColor: String,
      eyeColor: String,
      size: String,
      gender: String,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviewCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["active", "inactive", "sold_out"],
      default: "active",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    testimonial: {
      quote: String,
      author: String,
      title: String,
    },
  },
  {
    timestamps: true,
  }
);

// Index for search and filtering
ProductSchema.index({ status: 1, featured: 1 });
ProductSchema.index({ price: 1 });

const Product: Model<IProduct> =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default Product;

