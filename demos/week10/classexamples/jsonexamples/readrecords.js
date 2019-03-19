/*readrecords.js*/

function loaddata() {
	
	var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     // r = xhr.JSONparse(responseText);
      displayData(xhr);
    }
  };
  xhr.open("GET", "newrecords.json", true);
  xhr.send();
	
	
	

}

function displayData(xhr) {
	
	var r=JSON.parse(xhr.responseText);
	var output="";
	for(var i=0; i<r.length; i++)
	{
		
			var obj=r[i]	;	
			//output+="<tr><td>"
			output+=obj.name;
			output+=obj.email;
			output+=obj.company;
			output+="<br>";
				
	}
document.getElementById("records").innerHTML=output;


}