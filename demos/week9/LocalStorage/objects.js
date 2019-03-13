function demoObjects() {	
	//
	// create a JSON object
	//
	var jsObject = {
		"name":"John", "age": 22, "city":"Calgary"
		};
	var hockeyObject = {
		"jersey": 22,
		"position": "RW",
		"lastName" : "Bossy"
		}
	/*
		The JSON.stringify() method converts a JavaScript value to a JSON string....
		https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
	*/
	var myJSON = JSON.stringify(jsObject);
	
	// save data to localStorage
	localStorage.setItem("testJson", myJSON);
	// save data to sessionStorage
	sessionStorage.setItem("testJson", myJSON);

	myJSON = JSON.stringify(hockeyObject);
	// save data to localStorage
	localStorage.setItem("hockeyObject", myJSON);
	// save data to sessionStorage
	sessionStorage.setItem("hockeyObject", myJSON);
	
	
	// get saved data from sessionStorage
	var sessionData = sessionStorage.getItem("testJson");
	// get saved data from localStorage
	var localData = localStorage.getItem("testJson");

	/*
		The JSON.parse() method parses a JSON string, constructing the JavaScript value or object described by the string...
		https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	*/
	obj = JSON.parse(localData);
	
	document.getElementById("demo").innerHTML =
	obj.name + "<br>" +
	obj.age + "<br>" +
	obj.city + "<br>";
	
	// remove saved data from sessionStorage
	sessionStorage.removeItem("testJson");
	// remove saved data from localStorage
	localStorage.removeItem("testJson");

	// remove all saved data from sessionStorage
	sessionStorage.clear();
	// remove all saved data from localStorage
	localStorage.clear();

}