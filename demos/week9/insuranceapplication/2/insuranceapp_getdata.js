/*insuranceapp.js*/
/*Modified to read local storage*/
window.onload=getLocalStorage;

//var customer={lastname,firstname,address,postalcode}

function getLocalStorage() {
	//read data from localStorage
	//var localData = sessionStorage.getItem("mycustomer");
	var localData = localStorage.getItem("mycustomer");
	obj=JSON.parse(localData);//parse out
	alert("Welcome Back "+obj.firstname);
	document.getElementById("lastname").value=obj.lastname;
	document.getElementById("firstname").value=obj.firstname;
	document.getElementById("address").value=obj.address;
	document.getElementById("postalcode").value=obj.postalcode;
}

function register() {
	
	document.getElementById("tickets").disabled=false;
	
	alert("Welcome "+name+"\nPlease enter the number of tickets you have received!");
	
}

/*This function will control the age and car value inputs and the submit button
These will ONLY be turned on if the number of tickets selected is less than 4*/
function controlinfo() {
	
	var numberoftickets=parseInt(document.getElementById("tickets").value);
	
	//if more than 3, display pop up
	if(numberoftickets>3)
	{
		alert("Hand me your keys and start riding your bike!");
	
	}
	else {
		alert("Enter your age and car value");
		//allow form to be completed
		document.getElementById("age").readOnly=false;
		document.getElementById("carvalue").readOnly=false;
		document.getElementById("submitbutton").disabled=false;
		}
	
}
function calculatepremium() {
	
	var age=parseInt(document.getElementById("age").value);	
	var numberoftickets=parseInt(document.getElementById("tickets").value);
	var carvalue = parseFloat(document.getElementById("carvalue").value);
	//create output message-start with name
	var message="We can do business";
	message+=("\n");
	//set up baserate and premium"<br/>"
	var baserate=carvalue*0.05;
	var premium=baserate;
	message+=("Base Rate :"+premium+"\n");
	
		if (age<25) {
			premium=premium+(baserate*.15);
			message+=("Age Premium: "+(baserate*.15).toFixed(2)+"\n");
			
		}
		if (numberoftickets==1 || numberoftickets==2) {
			premium=premium+(baserate*.10);
			message+=("Age Premium: "+(baserate*.10).toFixed(2)+"\n");
		}
		else if (numberoftickets==3) {
			premium=premium+(baserate*.25);
			message+=("Age Premium: "+(baserate*.25).toFixed(2)+"\n");
		}
		message+=("Total Premium: $ "+premium);
	//message="Your Premium is: $ "+premium;
	//document.getElementById("costpremium").innerHTML=message;
	alert(message);
	
}
