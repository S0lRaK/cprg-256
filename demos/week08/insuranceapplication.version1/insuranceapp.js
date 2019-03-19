/*insuranceapp.js*/

/*register function will only be called if valid data is entered into form*/
function register() {
	var name=document.getElementById("firstname").value;
	//select box "tickets" can now be enabled
	document.getElementById("tickets").disabled=false;
	alert("Welcome "+name+"\nPlease enter the number of tickets you received");
	
}
/*this function controls age and car value inputs. These will ONLY be enabled
if ticket value <4*/
function controlinfo() 
{
	var numberoftickets = parseInt(document.getElementById("tickets").value);
	//if tickets > 3 display alert box for no insurance
		if(numberoftickets>3)
		{
			alert("Hand me your keys and start riding your bike!");		
		}
		else 
		{
			//enable age,carvalue and submit button
			document.getElementById("age").readOnly=false;//note syntax of readOnly
			document.getElementById("carvalue").readOnly=false;
			document.getElementById("submitbutton").disabled=false;
			alert("Enter your age and car value");
		}
	
}

function calculatepremium() {
	//get data
	var age=parseInt(document.getElementById("age").value);
	var numberoftickets=parseInt(document.getElementById("tickets").value);
	var carvalue=parseFloat(document.getElementById("carvalue").value);	
	var message="We can do business!\n";
	//set base rate and premium
	var baserate=carvalue*0.05;
	var premium=baserate;
	//message
	message+=("Base Rate: "+premium+"\n");
		//process
			if(age<25)
			{
				premium=premium+(baserate * 0.15);
				//add to message
				message+=("Age Premium "+(baserate*0.15).toFixed(2)+"\n");
			}
			if(numberoftickets==1 || numberoftickets==2)
			{
				premium=premium+(baserate * 0.10);
				message+=("Ticket Premium: "+(baserate * 0.10).toFixed(2)+"\n");
			}
			else if (numberoftickets==3) 
			{
				premium=premium+(baserate * 0.25);
				message+=("Ticket Premium: "+(baserate * 0.25).toFixed(2)+"\n");
			}
			message+=("Total Premium: $"+premium);
			alert(message);
				
			
	
	
}