let express = require("express");
let mongoose = require("mongoose");
let path = require("path");
let indexRoute = require("./routes/index");
let studentRoute = require("./routes/students");

mongoose.connect("mongodb://127.0.0.1:27017/school");

mongoose.connection.once("connected", () => {
  console.log("connected to database");
});

mongoose.connection.on("error", (err) => {
  console.log(`erro while connecting :  ${err}`);
});

let app = express();

app.use(express.json());

//setting views directory to store the templates
app.set("views", path.join(__dirname, "views"));
// setting ejs as view engine
app.set("view engine", "ejs");

//routing middlewares
app.use("/", indexRoute);
app.use("/students", studentRoute);

app.listen(6000, () => {
  console.log("server listening on port 6000");
});
