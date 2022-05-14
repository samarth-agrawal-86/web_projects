const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const encrypt = require("mongoose-encryption");

const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/secretsDB");
//mongoose.connect("mongodb+srv://admin-samarth:Pass1234@cluster0.jt9ls.mongodb.net/todolistDB");

const userSchema = new mongoose.Schema({
    email: String,
    password: String
});
const secretMsg = "Thisisourlittlesecret.";
userSchema.plugin(encrypt, {secret: secretMsg, encryptedFields: ["password"]});

const User = new mongoose.model('User', userSchema);

// Using ejs to render home page
app.get('/', function (req, res) {
    res.render('home');
});

app.get('/register', function (req, res) {

    res.render('register');
});

app.get('/login', function (req, res) {
    res.render('login');
});

app.post("/register", function (req, res) {
    const newUser = new User({
        email: req.body.username,
        password: req.body.password
    });
    newUser.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.render('secrets');
        }
    });
});

app.post("/login", function (req, res) {
    User.findOne(
        {email:req.body.username},
        function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                if (foundUser.password===req.body.password) {
                    res.render('secrets');  
                } else {
                    res.send('Incorrect Password')
                }
            } else {
                res.send("No User Found")
            }
        }
    });
});


let port = process.env.PORT;
if(port==null || port==""){
    port=3000;
};

app.listen(port, function (req, res) {
    console.log('Server started');
});