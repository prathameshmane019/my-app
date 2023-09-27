import mongoose, { Schema } from "mongoose";

const ministrySchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // this should be a hashed password
  },
  {
    timestamps: true,
  }
);

const Ministry = mongoose.models.Ministry || mongoose.model("Ministry", ministrySchema);

export default Ministry;
