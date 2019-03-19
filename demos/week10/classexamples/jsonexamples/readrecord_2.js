function loaddata() {
	
	var data=' [ { "name": "Burnett, Maggie K.",  "email": "a.odio.semper@lacusUtnec.net", "company": "Tristique Senectus LLP"   },  {  "name": "Kent, Phoebe O.",  "email": "rhoncus.Proin.nisl@orcilacus.edu", "company": "Ante Bibendum Ullamcorper Corp."  }, {  "name": "Tucker, Amber P.",  "email": "ridiculus.mus.Proin@inceptoshymenaeosMauris.co.uk", "company": "Nam Tempor Diam Company"  }  ] ';
	
	var r = JSON.parse(data);
	
	
	
	var output="";
	var i=0;
	
	for( i=0; i<r.length; i++)
	{
		
			var obj=r[i]	;	
			
			output+=obj.name;
			output+=obj.email;
			output+=obj.company;
			output+="<br>";
				
	}
document.getElementById("records").innerHTML=output;

}