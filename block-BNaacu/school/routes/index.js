let express = require("express");

let router = express.Router();

router.get("/index", (req, res) => {
  res.render("index.ejs", { name: "rahul" });
});

module.exports = router;
