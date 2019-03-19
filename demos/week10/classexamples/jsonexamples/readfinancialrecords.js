/*readrecords.js*/

function loaddata() {
	
	var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     // r = xhr.JSONparse(responseText);
      displayData(xhr);
    }
  };
  xhr.open("GET", "financerecords.json", true);
  xhr.send();
	
	
	

}

function displayData(xhr) {
	
	var r=JSON.parse(xhr.responseText);
	var output="";
	for(var i=0; i<r.length; i++)
	{
		
			var obj=r[i]	;	
			//output+="<tr><td>"
			output+="Name:"
			output+=obj.name;
			output+="<br>";
			output+="Address:"
			output+=obj.address;
			output+="<br>";
			//inner loop
			output+="Credit Cards:"
						for(var j=0; j<obj.cards.length;j++)
						{
							output+=obj.cards[j].card;
							output+="&nbsp&nbsp";
						}
						output+="<br>";
			output+="Contact Numbers:"
						for(var k=0; k<obj.contact.length;k++)
						{
							output+=obj.contact[k].phone;
							output+="&nbsp&nbsp";
						}
			
			output+="<br>";
				
	}
document.getElementById("records").innerHTML=output;


}