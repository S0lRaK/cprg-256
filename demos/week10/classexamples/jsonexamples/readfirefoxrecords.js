/*readrecords.js*/

function loaddata() {
	
	var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     // r = xhr.JSONparse(responseText);
      displayData(xhr);
    }
  };
  xhr.open("GET", "firefoxbookmarks.json", true);
  xhr.send();
	
	
	

}

function displayData(xhr) {
	
	var r=JSON.parse(xhr.responseText);
	var output="Bookmarks Data <br>";
	for(var i=0; i<r.length; i++)
	{
		
			var obj=r[i]	;	
			output+="GUID: "
			output+=obj.guid;
			output+="&nbspDate Added: "
			//note parse the date!
			var date = new Date(obj.dateAdded);
			output+=date;
			output+="&nbsp Title: "
			output+=obj.title;
			output+="&nbsp URL: "
			output+=obj.uri;
			output+="<br>";
				
	}
document.getElementById("records").innerHTML=output;


}