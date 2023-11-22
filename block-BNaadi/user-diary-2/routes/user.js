let express = require("express");
let mongoose = require("mongoose");
let User = require("../models/users.js");
let router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    let user = await User.create(req.body);
    res.redirect("/users");
  } catch (error) {
    next(error);
  }
});
router.get("/", async (req, res, next) => {
  try {
    let allUsers = await User.find();
    res.render("userList.ejs", { allUsers: allUsers });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    res.render("singleUser.ejs", { user: user });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    await User.findByIdAndUpdate(id, req.body);
    res.redirect("/users/" + id);
  } catch (error) {
    next(error);
  }
});
router.delete("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    await User.findByIdAndDelete(id);
    res.redirect("/users");
  } catch (error) {
    next(error);
  }
});
module.exports = router;
