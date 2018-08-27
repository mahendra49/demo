var express = require("express");
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyparser = require("body-parser");


app.use(bodyparser.urlencoded({extended:false}));
app.set("view engine","ejs");
app.use(bodyparser.json());// parse application/json


//in "user" colletions ..with field "username"
app.get("/",function(req,res) {
    
  res.render("index3"); 
});


//xmlrequest here simple get request
app.get("/new",function(req,res) {
    
    var url = "mongodb://localhost:27017/";
    console.log(req.body);
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



//xmlrequest here  --- get request with some query in params
app.get("/new1",function(req,res) {
   	 
	console.log(req.query.somevariable);
	res.send("ok ok"); 
   
});




//post request
app.post("/post",function(req,res){
	
	console.log(req.body.firstname);
	

});


app.listen(3000,function() {
    console.log("server started");
})

