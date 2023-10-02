import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    authId: String,
    email: String,
    role: String
  });
  
  export const User = mongoose.model('User', userSchema);
  