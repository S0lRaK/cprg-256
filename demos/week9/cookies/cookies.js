function welcome() {
	var name = 	getCookie("firstname");
	name = "'" +name + " " + getCookie("lastname")+ "'";
	document.getElementById("lastname").innerHTML = name;
}

function setUsernameCookie() {
	var username = document.getElementById("username").value;
	setCookie("username", username, 1);
	document.getElementById("ousername").value = getCookie("username");
}

function setFnameCookie() {
	var firstname = document.getElementById("firstname").value;
	setCookie("firstname", firstname, 1);
	document.getElementById("ofirstname").value = getCookie("firstname");
}

function setLnameCookie() {
	var lastname = document.getElementById("lastname").value;
	setCookie("lastname", lastname, 1);
	document.getElementById("olastname").value = getCookie("lastname");
}


function currentCookieState() {
	var username = getCookie("username");
	var firstname = getCookie("firstname");
	var lastname = getCookie("lastname");
	
	document.getElementById("ousername").value = getCookie("username");
	document.getElementById("ofirstname").value = getCookie("firstname");
	document.getElementById("olastname").value = getCookie("lastname");
}

function setDefaultCookie() {
	var username = getCookie("username");
	var firstname = getCookie("firstname");
	var lastname = getCookie("lastname");
	
	setCookie("username", "John Doe", 1);
	setCookie("firstname", "John", 1);
	setCookie("lastname", "Doe", 1);
	
	document.getElementById("ousername").value = getCookie("username");
	document.getElementById("ofirstname").value = getCookie("firstname");
	document.getElementById("olastname").value = getCookie("lastname");
}

/*
 * http://www.w3schools.com/js/js_cookies.asp
 */
function setCookie(cookieName, cookieValue, length) {
    var date = new Date();
    date.setTime(date.getTime() + (length*24*60*60*1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/*
 * http://www.w3schools.com/js/js_cookies.asp
 */
function getCookie(cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
	
    var ca = decodedCookie.split(';');
    
	for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}