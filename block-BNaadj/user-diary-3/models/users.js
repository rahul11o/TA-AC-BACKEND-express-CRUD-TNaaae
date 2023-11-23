// let express = require("express");
let mongoose = require("mongoose");

let usersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: Number,
  bio: String,
  hobbies: [String],
});

module.exports = mongoose.model("User", usersSchema);
