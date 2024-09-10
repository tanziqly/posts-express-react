import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      unique: true,
      required: true,
      type: String,
    },
    email: {
      unique: true,
      required: true,
      type: String,
    },
    passwordHash: {
      required: true,
      type: String,
    },
    avatarUrl: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", UserSchema);
