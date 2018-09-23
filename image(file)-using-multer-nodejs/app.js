var express= require("express");
var app = express();
var multer=require("multer");

//storage path and rename file name
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './tmp/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now()+'.jpg');
  }
});

//multer object pass strogae and also we need to filter some files and limit the size of file 
var upload = multer({ //multer settings
    storage: storage,
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if(ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    },
    limits:{
        fileSize: 1024 * 1024
    }
});

//here upload is a middleware

/*
	we can use upload.single("form-name-attribue") as middle ware to get image
	also upload.array("form-name-attrivute",limit) for multiple files
	our upload.fileds for specfic fileds 

*/


app.post("/profile",upload.single('profilepic'),function(req,res){
	console.log("done");
	res.json({"holla":"bolla"});
});

app.get("/",function(req,res){

});

app.get("/images/:id",function(req,res){
	var pathis="/tmp/"+req.params.id;
	console.log(__dirname+pathis);
	res.sendFile(__dirname+pathis);
});


app.listen(3000);