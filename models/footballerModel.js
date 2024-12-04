import mongoose from "mongoose";
const footballerSchema = new mongoose.Schema(
  {
    fullName: { require: true, type: String },
    position: { require: true, type: String },
    avatar: { require: true, type: String },
    nationality: { require: true, type: String },
    dob: { require: true, type: String },
    bio: { type: String, require: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    updateBy: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
  },
  { timestamps: true }
);

export default mongoose.model("footballers", footballerSchema);
