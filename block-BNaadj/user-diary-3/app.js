// Requires
let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let path = require("path");
let userRoute = require("./routes/users.js");

// connection to database
mongoose.connect("mongodb://127.0.0.1:27017/diaryThree");

mongoose.connection.once("connected", () => {
  console.log("connected to database");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

// Intialising express application

let app = express();

// Middlewares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));

// setting up view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Routers

app.use("/users", userRoute);

//404

app.use((req, res) => {
  res.send("Page not found 🥺");
});

//custom error

app.use((err, req, res, next) => {
  next(err);
});

//listener
app.listen(2000, () => {
  console.log("server is listening on port 2000");
});
