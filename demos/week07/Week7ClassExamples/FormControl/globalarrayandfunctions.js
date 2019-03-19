/*
Reads data from a form and writes it to customerdata array
*/

var customerdata = [];

function storedata() {
	//get data from form
	//As data is retrieved it is added to 'customerdata'
	//var customerdata=[];
	var fullname = document.getElementById("clientname").value;
	customerdata[0] = fullname;
	var address = document.getElementById("address").value;
	customerdata[1] = address;
	var contactphone = document.getElementById("contactphone").value;
	customerdata[2] = contactphone;
	var email = document.getElementById("email").value;
	customerdata[3] = email;

	alert(customerdata);
	//activate form
	setFormToEdit();
}

/*
Calculates future value

*/
function calcfv() {
	//variables
	//get data from the html page

	var outmessage = "";//this will be sent back to the page
	var interestrate = document.getElementById("interestrate").value;
	var principle = document.getElementById("principle").value;
	var years = document.getElementById("years").value;
	//required values for future value formula
	var months = parseFloat(0);
	var futurevalue = parseFloat(0);
	//parse data from html page to numbers
	interestrate = parseFloat(interestrate);
	principle = parseFloat(principle);
	years = parseFloat(years);
	//NOTE Interest will be calculated monthly. Need to change years to months and change
	//interest rate to a monthly rate
	months = years * 12;
	interestrate = interestrate / 12;
	//to make calculation easier, add 1 to interest rate
	interestrate = interestrate + 1;
	//calculate future value
	futurevalue = principle * Math.pow(interestrate, months);
	//use alert box
	//alert("Future Value is: $ "+futurevalue.toFixed(2));
	//push future value back to html page
	outmessage += customerdata[0] + "<br>";
	outmessage += "Future Value of Investement: $" + futurevalue.toFixed(2);
	outmessage += "<br>";
	alert(outmessage);
	document.getElementById("result").innerHTML = outmessage;//displays 2 decimal places
}

/*
Allows investment form to be edited
*/
function setFormToEdit() {
	document.getElementById("principle").readOnly = false;
	document.getElementById("years").readOnly = false;
	document.getElementById("interestrate").disabled = false;
}
