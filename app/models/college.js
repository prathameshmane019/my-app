import mongoose, { Schema } from "mongoose";

const collegeSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  }
);

const College =
  mongoose.models.College || mongoose.model("College", collegeSchema);

export default College;
