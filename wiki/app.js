const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const lodash = require("lodash");

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

app.route('/articles')
.get(function (req, res) {
    Article.find({},function (err, articles) {
        if (err) {
            console.log(err);
        } else {
            res.send(articles);
        }
    });
})
.post(function (req, res) {
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
})
.delete(function (req, res) {
    Article.deleteMany({}, function (err) {
        if (err) {
            console.log(err);
        } else {
            // console.log('Success');
            res.send("Successfully Deleted all articles");
        }
    });
});

app.route("/articles/:articleName")
.get(function (req, res) {
    Article.findOne({title:req.params.articleName}, function (err, article) {
        if (article) {
            res.send(article);
        } else {
            res.send("No Article Found");
        }
    });
})
.put(function (req, res) {
    Article.replaceOne(
        {title:req.params.articleName},
        {title: req.body.title, content:req.body.content},
        function (err) {
            if (err) {
                console.log(err);
            } else {
                res.send("PUT : record updated successfully");
            }
        }
    )
})
.patch(function (req, res) {
    Article.updateOne(
        {title:req.params.articleName},
        {title:req.body.title, content: req.body.content},
        function (err) {
            if (err) {
                console.log(err);
            } else {
                res.send("PATCH : record updated successfully");
            }
        }
    );
})
.delete(function (req, res) {
    Article.deleteOne(
        {title: req.params.articleName},
        function (err) {
            if (err) {
                console.log(err);
            } else {
                res.send("DELETE : record deleted successfully");
            }
        }
    );
});

let port = process.env.PORT;
if(port==null || port==""){
    port=3000;
};

app.listen(port, function (req, res) {
    console.log('Server started');
});