//global variables
var objectarray = [];
var i = 0;//index

//reads items from form, creates clientobject and puts into objectarry
function addToArray() {
    var clientobject = { lastname, firstname, address, postalcode };
    clientobject.lastname = document.getElementById("lastname").value;
    clientobject.firstname = document.getElementById("firstname").value;
    clientobject.address = document.getElementById("address").value;
    clientobject.postalcode = document.getElementById("postalcode").value;
    objectarray.push(clientobject);
    displayList();
}

/*
This is a 'for' loop that reads each element from objectarray.
Each iteration creates a string value that will be displayed as a radio button
Each radio button will have a value of i from 0 to length of objectarray-1
Any of the items can be deleted by selecting one of the radio buttons
This function is also called after deleteItem is called-resets the value items.
*/
function displayList() {
    var client;
    var displayRadiobuttions = ""

    for (var i = 0; i < objectarray.length; i++) {

        //local instance of book
        var clientobject = { lastname, firstname, address, postalcode };
        clientobject = objectarray[i];//read element from object array
        //create client string by appending variables from client object
        client = clientobject.lastname + " , " + clientobject.firstname + " , " + clientobject.address + " , " + clientobject.postalcode;

        //create radio button elements
        displayRadiobuttions += "<input type=radio name=listitem ";
        displayRadiobuttions += " value=" + i + " ";
        displayRadiobuttions += " onchange=deleteItem(this.value)>";//this function will be called if the radio button is selected
        displayRadiobuttions += client + '<br>';


    }

    //display list
    document.getElementById("showlist").innerHTML = displayRadiobuttions;
}

//this function will delete any item from the list
//it uses 'splice' that requires 2 variables: the index value and how many values to delete
function deleteItem(i) {
    objectarray.splice(i, 1);//deletes 1 item at index i
    displayList();//display modified list
}