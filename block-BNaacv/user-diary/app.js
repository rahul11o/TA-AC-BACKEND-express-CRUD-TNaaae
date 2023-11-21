let express = require("express");
let mongoose = require("mongoose");
let logger = require("morgan");
let path = require("path");
let usersRouter = require("./routes/users");
const morgan = require("morgan");

mongoose.connect("mongodb://127.0.0.1:27017/diary");

mongoose.connection.once("connected", () => {
  console.log("connected to database");
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});

let app = express();

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setup view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/users", usersRouter);

app.use((req, res, next) => {
  console.log("page not found");
  res.status(404).send("page not found");
});

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
