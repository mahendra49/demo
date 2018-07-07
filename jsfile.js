"use strict"
function getFile(file,callback){
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status == "200"){
            callback(xhr.responseText);
        }
    };
    xhr.send(null);
}

getFile("text.json",function(text){
 var data=JSON.parse(text);
 	career(data.career);
}
)

function career(text){
   
    document.getElementById("childtwo").innerHTML = text.info;
}
