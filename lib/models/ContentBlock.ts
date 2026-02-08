import mongoose from "mongoose";

export interface IContentBlock {
  key: string; // e.g., "homepage_hero", "faq_1", "testimonial_1"
  type: "text" | "html" | "image" | "testimonial" | "faq";
  title?: string;
  content: string;
  metadata?: Record<string, any>;
  order: number;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ContentBlockSchema = new mongoose.Schema<IContentBlock>(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["text", "html", "image", "testimonial", "faq"],
      required: true,
    },
    title: String,
    content: {
      type: String,
      required: true,
    },
    metadata: mongoose.Schema.Types.Mixed,
    order: {
      type: Number,
      default: 0,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);


ContentBlockSchema.index({ type: 1, active: 1, order: 1 });

const ContentBlock = (mongoose.models.ContentBlock as mongoose.Model<IContentBlock>) ||
  mongoose.model<IContentBlock>("ContentBlock", ContentBlockSchema);

export default ContentBlock;

