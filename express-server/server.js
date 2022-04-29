const express = require("express");
const app = express();

app.get("/", function(req, res){
    //console.log(request);
    res.send("<h1>Hello World</h1>");
});

app.get("/contact", function (req, res) {
    res.send("Contact me at: samarth@gmail.com")
})

app.get("/about", function (req, res) {
    res.send("I'm Samarth. I am a technologist. Love everything tech and startup entusiast")
})

app.get("/hobbies", function (req, res) {
    res.send("Coffee, Coding")
})

app.listen(3000, function(){
    console.log('Server started at port 3000');
});