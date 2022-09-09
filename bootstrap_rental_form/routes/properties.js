const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const application = require("../src/application");

// Email services
let transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PWD,
  },
});

// Navigation
router.get("/", function (req, res) {
  res.render("properties");
});

router.get("/yellow-gold-building", function (req, res) {
  res.render("yellow-gold-building", { submitted: false });
});

router.post("/:buildingId", function (req, res) {
  //res.send(req.body);
  const message = {
    from: "samarth@email.com",
    to: "samarth8625@gmail.com",
    subject: `New application submitted for ${req.params.buildingId}`,
    html: application.formatHTML(req.body, req.params.buildingId),
  };
  transport.sendMail(message, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.render(req.params.buildingId, { submitted: true });
});

module.exports = router;
