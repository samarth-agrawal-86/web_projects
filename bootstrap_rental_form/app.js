// Module Dependencies

require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const app = express();

// Config

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middleware

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
});

// LISTEN API. to start the server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function (req, res) {
  console.log("Server started at port 3000");
});
