//using ajax to retrieve content of web page
//based on example page 578 Internet and world wide web by Deitel et al


window.addEventListener("load", registerListeners, false);
var asynchrequest;

function registerListeners() {
	
	var img;
	img=document.getElementById("carpic1");
	img.addEventListener("mouseover", function () { getContent("exner.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
	img=document.getElementById("carpic2");
	img.addEventListener("mouseover", function () { getContent("shelbydaytona.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
	img=document.getElementById("carpic3");
	img.addEventListener("mouseover", function () { getContent("countach.html");}, false);
	img.addEventListener("mouseout", clearContent, false);
}

function getContent(infopage) {

		asynchrequest= new XMLHttpRequest();
		asynchrequest.onreadystatechange = function() {
    if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
      document.getElementById("carinfo").innerHTML = asynchrequest.responseText;
    }
  };
  asynchrequest.open("GET", infopage, true);
  asynchrequest.send();
}


function clearContent() {
	
	document.getElementById("carinfo").innerHTML="";

}