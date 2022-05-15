const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const lodash = require("lodash");
const date = require(__dirname+'/date.js');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));

app.set('view engine', 'ejs');

//mongoose.connect(process.env.MONGOOSE_LOCAL_DB);
mongoose.connect(process.env.MONGOOSE_ATLAS_DB);

const itemSchema = new mongoose.Schema({
    name: String,
});
const Item = mongoose.model("Item", itemSchema);
const item1 = new Item({
    name: "Buy Food"
});
const item2 = new Item({
    name: "Cook Food"
});
const item3 = new Item({
    name: "Eat Food"
});
const defaultItems = [item1, item2, item3];

const listSchema = new mongoose.Schema({
    name: String,
    items: [itemSchema]
});

const List = new mongoose.model('List', listSchema);

app.get('/', function (req, res) {
    Item.find({}, function (err, docs) {
        if (docs.length ===0) {
            Item.insertMany(defaultItems,function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Items inserted Successfully');
                }
            });
        res.redirect('/');

        } else {
            //console.log(docs);
            res.render('list', {page:'Today', listItems:docs});
        }
        // console.log(docs);
    });
});

app.get('/:customListName', function (req, res) {
    const listName = lodash.capitalize(req.params.customListName) ;
    console.log('Access list is ', listName);
    List.findOne({name:listName}, function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            if (doc==null) {
                console.log('Does not exists');
                // create a new list
                const newList = new List({
                    name: listName,
                    items: defaultItems
                });
                newList.save();
                res.redirect('/'+listName);
            } else {
                console.log('Doc Exists!!');
                // show an existing list
                res.render('list', {page:doc.name, listItems:doc.items});
            }
        }
        
    });

    
    
    
})

app.get('/work', function (req, res) {
    res.render('list', {page:'Work', listItems:workItems});
});

app.get('/about', function (req, res) {
    res.render('about');
});

app.post("/", function (req, res) {
    let listName = req.body.button;
    let itemName = req.body.addItem;
    //console.log(req.body);
    const newItem = new Item({
        name: itemName,
    });
    if (listName==='Today') {
        newItem.save();
        res.redirect('/');
    } else {
        List.findOne({name:listName}, function (err, doc) {
            if (err) {
                console.log(err);
            } else {
                // newItem.save();
                console.log(doc);
                doc.items.push(newItem);
                doc.save();
                res.redirect('/'+listName);
            }
        });
    }

    
});

app.post('/delete', function (req, res) {
    const listName = req.body.listName;
    const checkedItemId = req.body.checkbox;
    if (listName==='Today') {
        Item.findByIdAndDelete(checkedItemId, function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('Item Deleted successfully');
                res.redirect('/');
            }
        })
    } else {
        List.findOneAndUpdate({name:listName}, {$pull:{items:{_id:checkedItemId}}}, function (err, doc) {
            if (!err) {
                if (doc) {
                    console.log('Deleted Successfully');
                }
            }
        });
        res.redirect('/'+listName);
    }

    
})

let port = process.env.PORT;
if(port==null || port==""){
    port=3000;
}
app.listen(port, function (req, res) {
    console.log('Server running at port 3000');
});