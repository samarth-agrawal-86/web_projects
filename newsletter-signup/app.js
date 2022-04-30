const express = require("express");
const bodyParser = require("body-parser");
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/", function (req, res) {
    //res.send("Hello");
    res.sendFile(__dirname+"/signup.html")
});

app.post('failure', function(req, res) {
    res.redirect('/');
});

app.post("/", function(req, res){
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.inputEmail;
    //console.log(firstName+" "+lastName+" " + email);

    var data = {
        members :  [
            {
                email_address: email,
                status: "subscribed",
                merge_fields:{
                    FNAME: firstName,
                    LNAME: lastName,
                }
            }
        ]
    };

    var jsonData = JSON.stringify(data);
    var url = "https://us17.api.mailchimp.com/3.0/lists/c81793de4d";
    var options = {
        method: 'POST',
        auth: "anystring:2e5fe421a0441f3851200769d2a99ab6-us17"
        
    }

    const request = https.request(url, options, function (response) {
        response.on('data', function (data) {
            var responseData = JSON.parse(data);
            //console.log(responseData);
            //console.log(response.statusCode);
            // if (response.statusCode==200) {
            //     console.log('Success');
            //     //response.sendFile(__dirname+'/success.html');
            // } else {
                //     console.log('Failure');
                //     console.log(JSON.parse(data).errors);
                //     response.sendFile(__dirname+'/failure.html');
                // }
                if (responseData.error_count>0) {
                    console.log('Error');
                    res.sendFile(__dirname+'/failure.html');
                } else {
                    // console.log(JSON.parse(data));
                    // console.log('new Member');
                    // console.log(JSON.parse(data).new_members);
                    // console.log('updated member');
                    // console.log(JSON.parse(data).updated_members);
                    // console.log('errors');
                    // console.log(JSON.parse(data).errors);
                    // console.log('error count');
                    // console.log(JSON.parse(data).error_count);
                    console.log('Success');
                    res.sendFile(__dirname+'/success.html');
                    
                }
                
            })
        });

        request.write(jsonData);
                request.end();

    


});
app.listen(3000, function (params) {
    console.log("server running at port 3000");
});


// API KEY
// 2e5fe421a0441f3851200769d2a99ab6-us17

// LIST ID
// c81793de4d