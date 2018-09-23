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

//some jquery on client side
/*
	$(document).ready(function(){
   $("#commentsubmit").on("submit",function(e){
        e.preventDefault();
        var action1=e.currentTarget.action;
        
        console.log($("#currentsubmit").serialize());
        
        $.ajax({
            url:action1,
            type:'post',
            dataType:'json',
            data: $("#commentsubmit").serialize(),
            success: function(data) {
              var ret = JSON.stringify(data);
              console.log('Success: '+JSON.stringify(data))
            },
            error:function(err){
                console.log("error");
            }
        })
   });
});
*/

//ajax for files or any form data ...this is really useful
$(document).ready(function (e) {
    $('#imageUploadForm').on('submit',(function(e) {
        e.preventDefault();
        var formData = new FormData(this);

        $.ajax({
            type:'POST',
            url: $(this).attr('action'),
            data:formData,
            cache:false,
            contentType: false,
            processData: false,
            success:function(data){
                console.log("success");
                console.log(data);
            },
            error: function(data){
                console.log("error");
                console.log(data);
            }
        });
    }));

    $("#ImageBrowse").on("change", function() {
        $("#imageUploadForm").submit();
    });
});

app.listen(3000,function() {
    console.log("server started");
})

