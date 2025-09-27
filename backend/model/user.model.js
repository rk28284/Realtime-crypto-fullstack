const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Email Address is required"],
    unique: true, 
    lowercase: true, 
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;