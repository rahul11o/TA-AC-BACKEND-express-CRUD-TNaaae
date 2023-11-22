let express = require("express");
let mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  bio: String,
});

module.exports = mongoose.model("User", userSchema);
