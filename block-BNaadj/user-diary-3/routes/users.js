let express = require("express");
let router = express.Router();
let User = require("../models/users");

router.get("/new", (req, res, next) => {
  try {
    res.render("newUserForm.ejs");
  } catch (error) {
    next(error);
  }
});

router.post("/new", async (req, res, next) => {
  try {
    await User.create(req.body);
    res.send("user created");
  } catch (error) {}
});

router.get("/", async (req, res, next) => {
  try {
    let usersList = await User.find();
    if (usersList.length > 0) {
      res.render("usersList.ejs", { usersList: usersList });
    } else {
      res.send("no user found");
    }
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    let user = await User.findById(id);
    // res.send(user);
    res.render("singleUser.ejs", { user: user });
  } catch (error) {
    next(error);
  }

  router.get("/edit/:id", async (req, res, next) => {
    try {
      let id = req.params.id;
      let user = await User.findById(id);
      res.render("updateForm.ejs", { user: user });
    } catch (error) {
      next(error);
    }
  });
});
router.post("/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    await User.findByIdAndUpdate(id, req.body);
    res.redirect("/users/" + id);
  } catch (error) {
    next(error);
  }
});
router.get("/delete/:id", async (req, res, next) => {
  let id = req.params.id;
  await User.findByIdAndDelete(id);
  res.redirect("/users");
});

module.exports = router;
