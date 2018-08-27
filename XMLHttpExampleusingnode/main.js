var myRequest = new XMLHttpRequest();

myRequest.open('GET', 'sample.json');

myRequest.onreadystatechange = function () { 
    // 4. check if the request has a readyState of 4, which indicates the server has responded (complete)
    if (myRequest.readyState === 4) {
        // 5. insert the text sent by the server into the HTML of the 'ajax-content'
	var obj = JSON.parse(myRequest.responseText);      
	document.getElementById('unique').innerHTML = obj.glossary.title;
    }
};

myRequest.send();



