import mongoose, { Schema, models } from "mongoose";

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  });

let User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
