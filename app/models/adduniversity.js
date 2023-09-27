import mongoose, { Schema } from "mongoose";

const addUniversitySchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  }
);

const AddUniversity =
  mongoose.models.AddUniversity ||
  mongoose.model("AddUniversity", addUniversitySchema);

export default AddUniversity;
