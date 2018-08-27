var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.set("view engine","ejs");



//in "user" colletions ..with field "username"
app.get("/",function(res,res) {
    
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("social");
        var query = { username: "mahendra" };
        dbo.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
           // console.log(result[0]);
            var ans=result[0].username;
            //console.log(ans);
            var o={};
            var key='upvotes';
            o[key]=ans
            JSON.stringify(o);
            //res.json(o);
	    res.render("index");        
	    db.close();
        }); 
       
    }); 
});


//xmlrequest here
app.get("/new",function(res,res) {
    
    var url = "mongodb://localhost:27017/";

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("social");
        var query = { username: "mahendra" };
        dbo.collection("users").find(query).toArray(function (err, result) {
            if (err) throw err;
            console.log(result[0]);
            var ans=result[0].username;
            //console.log(ans);
            var o={};
            var key='upvotes';
            o[key]=ans
            JSON.stringify(o);
            res.json(o);
	    //res.render("index");        
	    db.close();
        }); 
       
    }); 
});


app.listen(3000,function() {
    console.log("server started");
})

