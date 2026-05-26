import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const AdminUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export type AdminUserDocument = InferSchemaType<typeof AdminUserSchema>;

export const AdminUser: Model<AdminUserDocument> =
  mongoose.models.AdminUser || mongoose.model("AdminUser", AdminUserSchema);
