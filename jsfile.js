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
 	career(data.person);

}
)

function career(text){
    console.log(text);
    // document.getElementById("akhil").innerHTML = text.education.inter.cname;
    document.getElementById("carobj").innerHTML="<h3>" +text.career.obj+ "</h3>"
    document.getElementById("add").innerHTML="<h2>" +text.address.street+ " "+text.address.village+"</h2>"
    document.getElementById("qual").innerHTML="<li>"+text.education.school.sname +" "+text.education.school.year +"</li>"+"<li>"+text.education.inter.cname +"</li>"+"<li>"+text.education.engineering.cname +"</li>"
        
}
