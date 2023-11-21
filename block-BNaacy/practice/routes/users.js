let express = require("express");
let router = express.Router();
let User = require("../models/users");

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    await User.create(req.body);
    res.status(202).redirect("/users/new");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
