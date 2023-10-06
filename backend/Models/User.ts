import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: String,
    email: String,
    roles: [String] || null
  });
  
  export const User = mongoose.model('User', userSchema);
  