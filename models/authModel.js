import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullname: { require: true, type: String },
    email: { require: true, type: String },
    password: { require: true, type: String },
    role: { require: true, type: String, enum: ["admin", "user"] },
  },
  { timestamps: true }
);

export default mongoose.model("user", userSchema);

