const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB");

const articleSchema = new mongoose.Schema({
    title: String,
    content: String
});
const Article = new mongoose.model('Article', articleSchema);

app.get('/', function (req, res) {
    res.send('Hello');
});

app.get('/articles', function (req, res) {
    Article.find({},function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.send(articles);
        }
    });
});

app.post("/articles", function (req, res) {
    let title = req.body.title;
    let content = req.body.content;

    const newArticle = Article({
        name:req.body.title,
        content:req.body.content
    });
    newArticle.save(function (err) {
        if (err) {
            console.log(err);
        } else {
            // console.log('Success');
            res.send("Successfully added a new article");
        }
    });
});

app.delete('/articles', function (req, res) {
    Article.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            // console.log('Success');
            res.send("Successfully Deleted all articles");
        }
    });
})

let port = process.env.PORT;
if(port==null || port==""){
    port=3000;
};

app.listen(port, function (req, res) {
    console.log('Server started');
});