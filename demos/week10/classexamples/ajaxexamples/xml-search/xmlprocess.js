//This will load and parse the XML file that will allow it to be searched
var xhr=new XMLHttpRequest();
var xmldoc;//reference to parsed XML file
window.onload=loadXML;

function loadXML() {
	
	//create event listent
	document.getElementById("searchname").addEventListener("keyup", function (){ findClient(this.value);},false);
	
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      xmldoc = xhr.responseXML;
    }
  };
  xhr.open("GET", "clientrecords.xml", true);
  xhr.send();
	
}




function findClient(name) {
	//clear page of data
	document.getElementById("parsedxml").innerHTML = "";

var i;//iterator

var recordname;
//start table
var table="<tr><th>Name</th><th>ID Number</th><th>Contact Phone</th><th>Card Number</th></tr>";
//process data by record
var x = xmldoc.getElementsByTagName("record");
  for (i = 0; i <x.length; i++) 
  { 
  //get name
  		recordname=x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
  //check if recordname starts with name
  			if (recordname.startsWith(name)) {
  	
    			table += "<tr><td>" +
    			x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue +
   			 "</td><td>" +
    			x[i].getElementsByTagName("idnumber")[0].childNodes[0].nodeValue +
    			"</td><td>" +
   			 x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue +
    			"</td><td>" +
    			x[i].getElementsByTagName("cardnumber")[0].childNodes[0].nodeValue +
    			"</td></tr>";
    		}
  }
  
  document.getElementById("parsedxml").innerHTML = table;

}