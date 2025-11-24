import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;          // Better Auth uses string IDs by default
  email: string;
  roles: string[];
  createdAt: Date;
}

const UserSchema = new Schema<IUser>({
  _id: { type: Schema.Types.ObjectId, required: true },
  email: { type: String, required: true, unique: true },
  roles: { type: [String], default: [] },
  createdAt: { type: Date, default: Date.now },
});

// Use `mongoose.models.User || ...` to avoid recompiling model
const UserModel = mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default UserModel;
