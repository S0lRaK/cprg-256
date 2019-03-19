//NOTE: DON'T DO THIS: window.onload=initFunction(); don't use ()!!!
window.onload=initFunction;

function initFunction(){
	//generate title
	var introfield="Lottery Ticket Generator";

	document.getElementById("introfield").innerHTML=introfield;
	
	generateTicket();
}

function generateTicket(){
	var i=0; //our counter
	var getnum; //our random number
	var variable_x="variable"+i; 
	// this will be used to load the variable values that
	// correspond to id="variable"
	for(i=0;i<6;i++)
	{
		var variable_x="variable"+i;
		getnum=Math.floor(Math.random()*49)+1;
		document.getElementById(variable_x).innerHTML=getnum;
	}
}