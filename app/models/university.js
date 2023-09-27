import mongoose, { Schema } from "mongoose";
import University from "../(Main)/university/page";

const universitySchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  }
);

const College =
  mongoose.models.University || mongoose.model("University", universitySchema);

export default University;
