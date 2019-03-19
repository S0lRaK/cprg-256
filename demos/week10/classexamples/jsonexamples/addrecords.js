/*readrecords.js*/
var xhr;
function adddata() {
	
	xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     // r = xhr.JSONparse(responseText);
      addjsonRecord(xhr);
    }
  };
  xhr.open("GET", "newrecords.json", true);
  xhr.send();
	
	
	

}

function addjsonRecord(xhr) {
	
	var r=JSON.parse(xhr.responseText);
	var datarecord={"name": "James, Phillip J. ","email": "pj.james@nowco.net ","company": "Nowco Net "};
	
	r.push(datarecord);
	var output="JSON File after adding data<br>";
	for(var i=0; i<r.length; i++)
	{
		
			var obj=r[i]	;	
			//output+="<tr><td>"
			output+=obj.name;
			output+=obj.email;
			output+=obj.company;
			output+="<br>";
				
	}
	output+="JSON file after Company Name of last Record<br>";
	var changeobj=r[3];//last item
	changeobj.company="Tommorow Net";
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

