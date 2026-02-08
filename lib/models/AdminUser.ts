import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export interface IAdminUser {
  email: string;
  password: string;
  name: string;
  role: "admin" | "super_admin";
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const AdminUserSchema = new mongoose.Schema<IAdminUser>(
  {
    email: {
      type: String,
      required: true,
      unique: true, // keep this, remove AdminUserSchema.index()
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "super_admin"],
      default: "admin",
    },
    lastLogin: Date,
  },
  { timestamps: true }
);

// Hash password before saving
AdminUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Compare password method
AdminUserSchema.methods.comparePassword = async function (
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

const AdminUser = (mongoose.models.AdminUser as mongoose.Model<IAdminUser>) ||
  mongoose.model<IAdminUser>("AdminUser", AdminUserSchema);

export default AdminUser;
