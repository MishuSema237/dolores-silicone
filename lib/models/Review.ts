import mongoose from "mongoose";

export interface IReview {
  customer: string;
  rating: number;
  comment: string;
  image?: string;
  status: "Published" | "Pending";
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new mongoose.Schema<IReview>(
  {
    customer: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
      default: 5,
    },
    comment: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Published", "Pending"],
      default: "Published",
    },
  },
  {
    timestamps: true,
  }
);

const Review = (mongoose.models.Review as mongoose.Model<IReview>) ||
  mongoose.model<IReview>("Review", ReviewSchema);

export default Review;
