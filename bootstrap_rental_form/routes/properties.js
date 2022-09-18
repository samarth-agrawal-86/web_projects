const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");
const mongoose = require("mongoose");
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

// Connect to local Database
//mongoose.connect(process.env.MONGOOSE_LOCAL_DB);

// Connect to MongoDB Atlas Database
mongoose.connect(process.env.MONGOOSE_ATLAS_DB);

const propertySchema = new mongoose.Schema({
  id: Number,
  name: String,
  desc: String,
  thumbnail: String,
  images: Array,
});
const Property = mongoose.model("Property", propertySchema);

const querySchema = new mongoose.Schema({
  buildingId: Number,
  name: String,
  dob: String,
  ssn: String,
  phone: Number,
  currentAddress: String,
  currentCity: String,
  currentState: String,
  currentZipcode: Number,
});
const Query = mongoose.model("Query", querySchema);

// Navigation
router.get("/", function (req, res) {
  Property.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      res.render("properties", { propItems: docs });
    }
  });
});

router.get("/listing/:buildingId", function (req, res) {
  const propertySearchId = req.params.buildingId;
  Property.findOne({ id: propertySearchId }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.render("listing", {
        searchedProperty: doc,
        submitted: false,
      });
    }
  });
});

router.post("/listing/:buildingId", function (req, res) {
  const propertySearchId = req.params.buildingId;

  // Creating a entry in db
  const newQuery = new Query({
    buildingId: propertySearchId,
    name: req.body.name,
    dob: req.body.dob,
    ssn: req.body.ssn,
    phone: req.body.phone,
    currentAddress: req.body.current_address,
    currentCity: req.body.current_city,
    currentState: req.body.current_state,
    currentZipcode: req.body.current_zipcode,
  });
  newQuery.save();
  /* Email functionality 
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
  */

  Property.findOne({ id: propertySearchId }, function (err, doc) {
    if (err) {
      console.log(err);
    } else {
      res.render("listing", {
        searchedProperty: doc,
        submitted: true,
      });
    }
  });
});

module.exports = router;
