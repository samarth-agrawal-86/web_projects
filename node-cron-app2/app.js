require("dotenv").config();
const express = require("express");
//const cronitor = require("cronitor")(process.env.CRONITOR_API_KEY);
//const nodeCron = require("node-cron");
const cron = require("node-cron");
const mongoose = require("mongoose");
app = express();
//cronitor.wraps(nodeCron);

//mongoose.connect(process.env.MONGOOSE_LOCAL_DB);
mongoose.connect(process.env.MONGOOSE_ATLAS_DB);

const statusSchema = new mongoose.Schema({
  stamp: String,
  name: String,
  msg: String,
});

const CronStatus = mongoose.model("Status", statusSchema);

/*
cronitor.schedule(
  "EveryMin",
  "* * * * *",
  function () {
    console.log("Console Log every min");
    const cronjob1 = new CronStatus({
      stamp: new Date().toLocaleString(),
      name: "EveryMin",
      msg: "Console Log every min",
    });
    cronjob1.save();
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);


cronitor.schedule("ConsoleLog2mins", "* * * * *", function (params) {
  console.log("Console Log every 2 mins");
  const cronjob2 = new CronStatus({
    stamp: new Date().toLocaleString(),
    name: "ConsoleLog2mins",
    msg: "Console Log every 2 mins",
  });
  cronjob2.save();
});
*/

// Using only the Cron package

// Setting up cron job
cron.schedule(
  "0 0 4-8 * * *",
  function (params) {
    console.log("Campaign4-8");
    const cronjob3 = new CronStatus({
      stamp: new Date().toLocaleString(),
      name: "Campaign4-8",
      msg: "Running every hour",
    });
    cronjob3.save();
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);

cron.schedule(
  "0 15 6-10 * * *",
  function (params) {
    console.log("Campaign8-10");
    const cronjob3 = new CronStatus({
      stamp: new Date().toLocaleString(),
      name: "Campaign8-10",
      msg: "Running every hour",
    });
    cronjob3.save();
  },
  {
    scheduled: true,
    timezone: "Asia/Kolkata",
  }
);

// LISTEN API: to start the server
let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function (req, res) {
  console.log("Server started");
});
