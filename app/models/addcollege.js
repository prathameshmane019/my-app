import mongoose, { Schema } from "mongoose";

const addCollegeSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  }
);

const AddCollege =
  mongoose.models.AddCollege || mongoose.model("AddCollege", addCollegeSchema);

export default AddCollege;
