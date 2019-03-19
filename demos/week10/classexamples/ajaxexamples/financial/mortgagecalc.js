/*mortgagecalc.js*/
function calcmortgage() {
	
	/*get values from form*/
	var amount = document.getElementById("amount").value;
	var interest = document.getElementById("rate").value;
	var amort=document.getElementById("amort").value;
	/*parse the numbers to double or int*/
	amount = parseFloat(amount);
	rate = parseFloat(interest);
	amort = parseInt(amort);
	/*modify rate for monthly amount*/
	rate=rate/12;
	/*calculate number of months*/
	var months = amort*12;
	/*mortgage calculation*/
	var payment = amount * ( (rate * (Math.pow(rate+1,months) ) ) / ( (Math.pow(rate+1,months)-1) ) );
	
	alert("Your Monthly mortgage payment is: "+payment);

}