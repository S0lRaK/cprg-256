window.onload = initfunction;

function initfunction() {
  var toDay = new Date();
  document.getElementById("dtfield").innerHTML = toDay;
}

function buttonandchecks() {
  //this will use a 'for' loop to check the radio buttons and
  //a series of 'if' statements to verify the check boxes
  var x;
  var message = "";
  var resultmessage = "";
  var giftamount = parseFloat(0);
  var radio_value; //get value from radio button
  var totalvalue = parseInt(0); //initialize this to 0

  /*use for loop to get value of radio button

  NOTE: THIS IS OLDER CODE. USE querySelector instead
  		for(x=0;x<document.costEstimation.specialty.length;x++)
  		{
  		if(document.costEstimation.specialty[x].checked)
  			{
  			 radio_value=document.costEstimation.specialty[x].value;
  			}
  		}
  */

  radio_value = document.querySelector('input[name=specialty]:checked').value;

  //parse radio_value to a float
  radio_value = parseFloat(radio_value);

  //if statements to get the values from the check boxes
  if (document.costEstimation.earrings.checked) {
    giftamount += 100; //the giftamount will by increased by this value, in this case 100
    message = (message + " Earrings");
  }
  if (document.costEstimation.broach.checked) {
    giftamount += 150;
    message = (message + " Broach");
  }
  if (document.costEstimation.watch.checked) {
    giftamount += 175;
    message = (message + " Watch");
  }
  if (document.costEstimation.necklace.checked) {
    giftamount += 200;
    message = (message + " Necklace");
  }

  //calculate total cost of gift
  totalvalue = radio_value + giftamount;

  resultmessage = ("Your Box will cost " + radio_value.toFixed(2) + " And your box contains: " + message + " for a total cost: " + totalvalue.toFixed(2));

  document.getElementById("result").innerHTML = resultmessage;
}