const express = require("express");
const router = new express.Router();

router.get("/", function (req, res) {
  res.render("commercial");
});

router.get("/market", function (req, res) {
  res.render("commercial");
});

module.exports = router;
