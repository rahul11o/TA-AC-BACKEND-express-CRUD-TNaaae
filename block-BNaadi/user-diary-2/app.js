// Requires
let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let path = require("path");
let User = require("./models/users");

// Connecting to mongodb local database using mongoose
mongoose.connect("mongodb://127.0.0.1:27017/diaryTwo");

mongoose.connection.once("connected", () => {
  console.log("connected to database");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// Initializing express application
let app = express();

// Middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Setting up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routers
app.use("/users", require("./routes/user"));

// 404
app.use((req, res) => {
  res.send("page not found");
});

// Custom error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(3500, () => {
  console.log("server listening on port 3500");
});
