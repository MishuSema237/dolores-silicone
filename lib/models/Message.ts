import mongoose from "mongoose";

export interface IMessage {
  name: string;
  email: string;
  subject?: string;
  content: string;
  status: "New" | "Replied" | "Archived";
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new mongoose.Schema<IMessage>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["New", "Replied", "Archived"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

MessageSchema.index({ status: 1, createdAt: -1 });

const Message = (mongoose.models.Message as mongoose.Model<IMessage>) ||
  mongoose.model<IMessage>("Message", MessageSchema);

export default Message;
