/*arrayofobjects.js*/
//global variables

var objectarray = []; //array
var indexvalue = 0; //used as global for modifyItem

function addToArray() {
  //read items from form and create client object
  var clientobject = {
    lastname,
    firstname,
    address,
    postalcode,
    info: [],
    asset: []
  };
  //input variables into clientobject
  clientobject.lastname = document.getElementById("lastname").value;
  clientobject.firstname = document.getElementById("firstname").value;
  clientobject.address = document.getElementById("address").value;
  clientobject.postalcode = document.getElementById("postalcode").value;
  //alert("Client Name: "+clientobject.firstname+" "+clientobject.lastname);
  //load into objectarray
  //get radio buttons
  var businesstype = document.querySelector("input[name=businesstype]:checked")
    .value;
  var residence = document.querySelector("input[name=residence]:checked").value;
  //push these into the info array inside client object
  clientobject.info.push(businesstype);
  clientobject.info.push(residence);
  //push asset values
  if (document.querySelector("input[name=truck]:checked")) {
    clientobject.asset.push("truck");
  }
  if (document.querySelector("input[name=car]:checked")) {
    clientobject.asset.push("car");
  }
  if (document.querySelector("input[name=rv]:checked")) {
    clientobject.asset.push("rv");
  }

  objectarray.push(clientobject);
  displayList(); //display object array
}

function displayList() {
  //variables
  var clientlist = ""; //this will be the list of elements in the array list
  var displayRadiobuttons = ""; //display elements as a list of radio buttons

  for (var i = 0; i < objectarray.length; i++) {
    //local instance of clientobject
    var clientobject = {
      lastname,
      firstname,
      address,
      postalcode,
      info: [],
      asset: []
    };
    clientobject = objectarray[i];
    clientlist =
      clientobject.lastname +
      "," +
      clientobject.firstname +
      "," +
      clientobject.address +
      "," +
      clientobject.postalcode;
    //use for loop to go through info and asset arrays
    for (var x = 0; x < clientobject.info.length; x++) {
      clientlist += clientobject.info[x] + " ";
    }
    for (var x = 0; x < clientobject.asset.length; x++) {
      clientlist += clientobject.asset[x] + " ";
    }

    //create radio button tags and elements
    displayRadiobuttons += "<input type=radio name=listitem ";
    displayRadiobuttons += " value=" + i + " ";
    displayRadiobuttons += " onchange=modifyItem(this.value)>";
    displayRadiobuttons += clientlist + "<br>";
  }
  //display list
  document.getElementById("showlist").innerHTML = displayRadiobuttons;
}

/*delete item from objectarry at index i using splice
function deleteItem(i) {
	//delete ONE  item at index i	
	objectarray.splice(i,1);
	//display modified list
	displayList();
}*/

function modifyItem(i) {
  indexvalue = i; //need this
  var dataitem;
  var clientobject = {
    lastname,
    firstname,
    address,
    postalcode,
    info: [],
    asset: []
  };
  clientobject = objectarray[i];
  //change buttons
  document.getElementById("submit").disabled = true;
  document.getElementById("edit").disabled = false;
  //load data into form
  document.getElementById("lastname").value = clientobject.lastname;
  document.getElementById("firstname").value = clientobject.firstname;
  document.getElementById("address").value = clientobject.address;
  document.getElementById("postalcode").value = clientobject.postalcode;
  //load data from info and asset
  //info will only contain 2 items, so these can be accessed directly
  dataitem = clientobject.info[0];
  if (dataitem == "commercial") {
    document.register.businesstype[0].checked = true;
  } //must be residential
  else {
    document.register.businesstype[1].checked = true;
  }
  //residence
  dataitem = clientobject.info[1];
  if (dataitem == "city") {
    document.register.residence[0].checked = true;
  } else {
    document.register.residence[1].checked = true;
  }

  //reset the checkboxes to unchecked
  document.register.truck.checked = false;
  document.register.car.checked = false;
  document.register.rv.checked = false;

  //use a for loop to load check boxes
  //check if asset length >0
  if (clientobject.asset.length > 0) {
    for (var i = 0; i < clientobject.asset.length; i++) {
      dataitem = clientobject.asset[i];
      if (dataitem == "truck") {
        document.register.truck.checked = true;
      } 

      if (dataitem == "car") {
        document.register.car.checked = true;
      } 

      if (dataitem == "rv") {
        document.register.rv.checked = true;
      } 
    }
  }
}

function setClientObject() {
  //the global value for indexvalue was set in the previous function
  //load data
  var clientobject = {
    lastname,
    firstname,
    address,
    postalcode,
    info: [],
    asset: []
  };
  //input variables into clientobject
  clientobject.lastname = document.getElementById("lastname").value;
  clientobject.firstname = document.getElementById("firstname").value;
  clientobject.address = document.getElementById("address").value;
  clientobject.postalcode = document.getElementById("postalcode").value;
  //alert("Client Name: "+clientobject.firstname+" "+clientobject.lastname);
  //load into objectarray
  //get radio buttons
  var businesstype = document.querySelector("input[name=businesstype]:checked")
    .value;
  var residence = document.querySelector("input[name=residence]:checked").value;
  //push these into the info array inside client object
  clientobject.info.push(businesstype);
  clientobject.info.push(residence);
  //push asset values
  if (document.querySelector("input[name=truck]:checked")) {
    clientobject.asset.push("truck");
  }
  if (document.querySelector("input[name=car]:checked")) {
    clientobject.asset.push("car");
  }
  if (document.querySelector("input[name=rv]:checked")) {
    clientobject.asset.push("rv");
  }

  objectarray[indexvalue] = clientobject;
  //reset submit button
  document.getElementById("submit").disabled = false;
  document.getElementById("edit").disabled = true;
  displayList(); //display object array
}
