// Requires
let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let User = require("./models/users");
let path = require("path");

// Connection to database

mongoose.connect("mongodb://127.0.0.1:27017/practice");

mongoose.connection.once("connected", () => {
  console.log("connected to databas");
});
mongoose.connection.on("error", (err) => {
  console.log(err);
});

// initialising express application

let app = express();

//Middlewares

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup  view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setting Routers

app.use("/users", require("./routes/users"));

// listener
app.listen(2500, () => {
  console.log("server running on port 2500");
});
