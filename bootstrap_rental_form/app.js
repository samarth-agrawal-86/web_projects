// Module Dependencies

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const propertiesRouter = require("./routes/properties");
const commercialRouter = require("./routes/commercial");
const app = express();

// Config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "./layouts/full-page-layout");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/properties", propertiesRouter);
app.use("/commercial", commercialRouter);

// Navigation
app.get("/", function (req, res) {
  res.render("home");
});

// LISTEN API. to start the server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function (req, res) {
  console.log("Server started at port 3000");
});
