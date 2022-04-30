const https = require("https");
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function (req, res) {
    var city = req.body.cityName;
    var apiKey = "db823486d903c323f7d5542bc5e2e2a2#";
    url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+apiKey;
    https.get(url, function (response) {
        //console.log(response.statusCode);
        response.on("data", function (data) {
            var weatherData = JSON.parse(data)
            //console.log(typeof(weatherData)); //object

            var temp = weatherData.main.temp;
            var desc = weatherData.weather[0].description;
            var icon = weatherData.weather[0].icon;
            var iconURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
            //console.log(iconURL);
            res.write("<h1>The temperature in "+ city+ " is currently " + temp + " degrees</h1>");
            res.write("<p>The weather is currently " + desc + "</p>");
            res.write("<img src="+iconURL+"></img>");
            res.send();
            
        })
        
        
    })
})

app.listen(3000, function (params) {
    console.log("Server started at port 3000");
})