let express = require("express");
let router = express.Router();
let User = require("../models/users");

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    await User.create(req.body);
    res.status(202).redirect("/users/new");
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    let allUsers = await User.find({});
    console.log(allUsers);
    res.render("users.ejs", { allUsers: allUsers });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    console.log(user);
    res.render("singleUser.ejs", { user: user });
  } catch (error) {
    next(error);
  }
});

router.get("/:id/edit", async (req, res, next) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    res.render("updateForm.ejs", { user: user });
  } catch (error) {
    next(error);
  }
});
router.post("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    await User.findByIdAndUpdate(id, req.body);
    res.redirect("/users");
  } catch (error) {
    next(error);
  }
});

router.get("/:id/delete", async (req, res, next) => {
  try {
    let id = req.params.id;
    await User.findByIdAndDelete(id);
    res.send("deleted suffecfully");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
