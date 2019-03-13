/**Based on code from Javascript and Ajax 7th Edition
 * 
 */
window.onload = initLinks;

//global variables

var myPix = new Array("pics/exner.jpg", "pics/countach.jpg", "pics/shelby_daytona.jpg");
var myCaptions = ["caption1", "caption2", "caption3"];
var thisPic = 0;

// can also make use of a object to represent:
// - image
// - caption

// and maintain a list of objects in place of 
// maintaing two separate arrays

// const MYPICS = {
// 	myPicture: [
// 		{
// 			image: "",
// 			caption: ""
// 		},
// 	]
// }

function initLinks() {
	document.getElementById("prevLink").onclick = processPrevious;
	document.getElementById("nextLink").onclick = processNext;
	updateCaption(thisPic);
}

function processPrevious() {
	if (thisPic == 0) {
		thisPic = myPix.length;
	}
	thisPic--;
	document.getElementById("myPicture").src = myPix[thisPic];

	// lets adjust the caption to match the picture
	// let caption = document.getElementById("caption");
	// caption.innerHTML = myCaptions[thisPic];

	updateCaption(thisPic);

	return false;
}

function processNext() {
	thisPic++;
	if (thisPic == myPix.length) {
		thisPic = 0;
	}
	document.getElementById("myPicture").src = myPix[thisPic];

	updateCaption(thisPic);

	return false;
}

function updateCaption(index) {
	// lets adjust the caption to match the picture
	let caption = document.getElementById("caption");
	caption.innerHTML = myCaptions[thisPic];
}