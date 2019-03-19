/*readrecords.js*/

function loaddata() {
	
	var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     // r = xhr.JSONparse(responseText);
      displayData(xhr);
    }
  };
  xhr.open("GET", "data.xml", true);
  xhr.send();
	
	
	

}

function displayData(xhr) {
	
	var i;
//get data as xml file
var xmldoc = xhr.responseXML;
//start table
var output="";
//process data by record
var x = xmldoc.getElementsByTagName("record");
  for (i = 0; i <x.length; i++) { 
    output+=x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue ;
   
    output+=x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue ;
   
   output+= x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue ;
   
   output+="<br>";
  }
  
  document.getElementById("records").innerHTML = output;


}