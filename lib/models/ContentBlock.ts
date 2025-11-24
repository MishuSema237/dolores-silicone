import mongoose, { Schema, Document, Model } from "mongoose";

export interface IContentBlock extends Document {
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

const ContentBlockSchema = new Schema<IContentBlock>(
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
    metadata: Schema.Types.Mixed,
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

const ContentBlock: Model<IContentBlock> =
  mongoose.models.ContentBlock ||
  mongoose.model<IContentBlock>("ContentBlock", ContentBlockSchema);

export default ContentBlock;

