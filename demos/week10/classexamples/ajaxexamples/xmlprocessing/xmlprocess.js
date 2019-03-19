//java script to process and display files

var xhr;

function getXMLFile() {
	var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      processXML(xhr);
    }
  };
  xhr.open("GET", "data.xml", true);
  xhr.send();
	
}

function processXML(xhr) {

var i;
//get data as xml file
var xmldoc = xhr.responseXML;
//start table
var table="<tr><th>Name</th><th>Email</th><th>Company</th></tr>";
//process data by record
var x = xmlDoc.getElementsByTagName("record");
  for (i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
    "</td></tr>" +
    x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue +
    "</td></tr>";
  }
  
  document.getElementById("parsedxml").innerHTML = table;

}