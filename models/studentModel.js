import mongoose from "mongoose";
const studentSchema = new mongoose.Schema(
  {
    IDCard: { require: true, type: String },
    name: { require: true, type: String },
    email: { require: true, type: String },
    phone: { require: true, type: String },
    classId: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("student", studentSchema);
