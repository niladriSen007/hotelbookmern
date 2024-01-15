import mongoose from "mongoose";
import { UserType } from "../types/userType";
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
    required: true,
  },
  confirmpassword: {
    type: String,
    required: true,
  },
});

export const UserDetails = mongoose.model<UserType>("UserDetail", UserSchema);
