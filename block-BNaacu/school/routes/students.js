let express = require("express");

let router = express.Router();

router.get("/new", (req, res) => {
  res.render("form.ejs");
});

router.post("/", (req, res) => {
  res.send("data saved ");
});

router.get("/", (req, res) => {
  res.render("students.ejs", { list: ["ankit", "suraj", "prashant", "ravi"] });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.render("studentDetail.ejs", {
    student: { name: "rahul", email: "rahul@altcampus.io" },
  });
});

module.exports = router;
