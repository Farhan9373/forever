import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: String,
    profile: String,
    role:String
  },
  {
    timestamps: true,
  }
);
export const User = mongoose.model("user", UserSchema);
