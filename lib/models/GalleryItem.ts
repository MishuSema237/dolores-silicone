import mongoose, { Schema, Document, Model } from "mongoose";

export interface IGalleryItem extends Document {
  title?: string;
  description?: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryItemSchema = new Schema<IGalleryItem>(
  {
    title: String,
    description: String,
    imageUrl: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    featured: {
      type: Boolean,
      default: false,
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

GalleryItemSchema.index({ featured: 1, order: 1 });
GalleryItemSchema.index({ tags: 1 });

const GalleryItem: Model<IGalleryItem> =
  mongoose.models.GalleryItem ||
  mongoose.model<IGalleryItem>("GalleryItem", GalleryItemSchema);

export default GalleryItem;

