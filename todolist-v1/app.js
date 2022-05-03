const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var dt = new Date();
    var d = dt.getDay();
    var dayName = weekday[d];
    res.render('list', {day:dayName});
})

app.listen('3000', function (req, res) {
    console.log('Server running at port 3000');
})