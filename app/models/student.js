import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  }
);

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);

export default Student;
