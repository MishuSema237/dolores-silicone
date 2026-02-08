import mongoose from "mongoose";

export interface IGalleryItem {
  title?: string;
  description?: string;
  imageUrl: string;
  tags: string[];
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const GalleryItemSchema = new mongoose.Schema<IGalleryItem>(
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

const GalleryItem = (mongoose.models.GalleryItem as mongoose.Model<IGalleryItem>) ||
  mongoose.model<IGalleryItem>("GalleryItem", GalleryItemSchema);

export default GalleryItem;

