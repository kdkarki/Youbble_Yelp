import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    authId: String,
    email: String,
    roles: [String] || null
  });
  
  export const User = mongoose.model('User', userSchema);
  