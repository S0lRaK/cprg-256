/**gathers data from form and calculates future value
 * 
 */


function calcfv()
{
	//get data from form
var interestrate=document.getElementById("interestrate").value;
var principle=document.getElementById("principle").value;
var years=document.getElementById("years").value;
//these variables are needed by the formula
var months=parseFloat(0);//initialize to zero
var futurevalue=parseFloat(0);//initialize to zero
//echo back
//alert(interestrate + "  "+ principle + "  " + years);

//Parse the variables into useable number values
interestrate= parseFloat(interestrate);
principle=parseFloat(principle);
years=parseFloat(years);

//intereste is calculated monthly so we need monthly interest amount
interestrate=interestrate/12;
//add 1 to make calculation easier
interestrate=interestrate+1;
//interest is calculated monthly so we need to multiply years * 12 to get months
months=years*12;
//calculate formula

futurevalue=principle*Math.pow(interestrate,months);

//push futurevalue back to html page
document.getElementById("result").innerHTML=futurevalue.toFixed(2);//format number to 2 decimal places

}