let express = require("express");

let router = express.Router();

router.get("/", (req, res) => {
  res.render("users.ejs", { list: ["rahul, ravi, suraj, raushan"] });
});

router.get("/new", (req, res) => {
  res.render("userForm.ejs");
});

router.get("/:id", (req, res) => {
  res.render("singleUser.ejs", {
    name: "rahul",
    email: "rahul@gamil.com",
    age: 21,
  });
});

router.post("/users", (req, res) => {
  console.log("hiii");
  res.send(req.body);
});

module.exports = router;
