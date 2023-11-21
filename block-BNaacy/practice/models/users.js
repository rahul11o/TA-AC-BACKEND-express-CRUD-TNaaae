let mongoose = require("mongoose");

let userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: String,
    age: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
