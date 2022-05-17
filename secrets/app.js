require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const session = require('express-session');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');



const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGOOSE_LOCAL_DB);
//mongoose.connect(process.env.MONGOOSE_ATLAS_DB);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    googleId: String,
    secret: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = new mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets"
  },
  function(accessToken, refreshToken, profile, cb) {
      //console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });

// Using ejs to render home page
app.get('/', function (req, res) {
    res.render('home');
});

app.get("/auth/google", 
    passport.authenticate("google", {scope:['profile']})
);

app.get("/auth/google/secrets", 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect to secrets.
    res.redirect('/secrets');
  });

app.get('/register', function (req, res) {
    res.render('register');
});

app.get('/login', function (req, res) {
    res.render('login');
});
app.get("/secrets", function (req, res) {
    User.find({secret:{$ne:null}}, function (err, foundUsers) {
        if (err) {
            console.log(err);
        } else {
            if (foundUsers) {
                res.render("secrets", {userWithSecrets:foundUsers});
            } else {
                res.render("Something went wrong");
            }
        }
    });
    
});

app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
});


app.post("/register", function (req, res) {
    User.register({username: req.body.username}, req.body.password, function (err, user) {
        if (err) {
            console.log(err);
            res.redirect('/register');
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            }) ;
        }
    });
});

app.post("/login", function (req, res) {
    const newUser = new User({
        username:req.body.username,
        password:req.body.password
    });
    req.login(newUser, function (err) {
        if (err) {
            console.log(err);
        } else {
            passport.authenticate("local")(req, res, function() {
                res.redirect("/secrets");
            }); 
        }
    });
});

app.get("/submit", function (req, res) {
    if (req.isAuthenticated) {
        res.render("submit");
    } else {
        res.redirect("/login");
    }
});

app.post("/submit", function (req, res) {
    const submittedSecret = req.body.secret;
    const userId = req.user._id;

    User.findById(userId, function (err, foundUser) {
        if (err) {
            console.log(err);
        } else {
            if (foundUser) {
                foundUser.secret=submittedSecret;
                foundUser.save(function () {
                    res.redirect("/secrets");
                });
                
            } else {
                
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