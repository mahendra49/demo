function customTag(tagName,callback){

  document.createElement(tagName);
  //find all the tags occurrences (instances) in the document
  var tagsarr = document.getElementsByTagName(tagName);
        //for each occurrence run the associated function
        for ( var i = 0; i < tagsarr.length; i++) {
            callback(tagsarr[i]);
        }
}
 
function codingdudeGravatar(element){
        //code for rendering the element goes here
        if (element.attributes.email){
            var gravatar = "http://www.gravatar.com/avatar/" + md5(element.attributes.email.value)+".png";
            element.innerHTML = "<img src='"+gravatar+"'>";
        }
}   
 
customTag("tanvi",codingdudeGravatar);