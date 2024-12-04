import mongoose from "mongoose";
import { RoleEnum } from "../utils/enum.js";

const userSchema = new mongoose.Schema(
  {
    fullName: { required: true, type: String }, // corrected "require" to "required"
    email: { required: true, type: String }, // corrected "require" to "required"
    password: { required: true, type: String }, // corrected "require" to "required"
    role: {
      required: true,
      type: [String],
      enum: [RoleEnum.USER, RoleEnum.ADMIN],
      default: [RoleEnum.USER],
    },
    avatar: { required: true, type: String, default: "string" }, // corrected "require" to "required"
  },
  { timestamps: true }
);

// Export the model using ES module syntax
export default mongoose.model("users", userSchema);
