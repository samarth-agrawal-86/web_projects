const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+'/date.js');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

var pages = ['work', 'personal'];
var personalItems = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app.get('/', function (req, res) {
    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // var dt = new Date();
    // var d = dt.getDay();
    // var dayName = weekday[d];
    // res.render('list', {day:dayName, listItems:personalItems});
    
    res.render('list', {page:date.getDayName(), listItems:personalItems});
});

app.post("/", function (req, res) {
    let listPage = req.body.button;
    let item = req.body.addItem;
    console.log(req.body);
    if (listPage=="Personal") {
        personalItems.push(item);
        res.redirect('/');
    } else {
        workItems.push(item);
        res.redirect('/work');
    }
});

app.get('/work', function (req, res) {
    res.render('list', {page:'Work', listItems:workItems});
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.listen('3000', function (req, res) {
    console.log('Server running at port 3000');
});