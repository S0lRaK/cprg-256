//show is a global variable
var show = "false";

function showOrHide() {

  if (show == "false") {

    document.getElementById("showthis").style.visibility = "visible";
    show = "true";

  } else {
    //show is true
    document.getElementById("showthis").style.visibility = "hidden";
    show = "false";
  }

}
//setvisible() accept value and displays text fields
function setvisible(val) {
  //use display
  if (val == 1) {
    document.getElementById("set1").style.visibility = "visible";
    document.getElementById("set2").style.visibility = "hidden";
    document.getElementById("set3").style.visibility = "hidden";
  }
  if (val == 2) {
    document.getElementById("set1").style.visibility = "hidden";
    document.getElementById("set2").style.visibility = "visible";
    document.getElementById("set3").style.visibility = "hidden";
  }
  if (val == 3) {
    document.getElementById("set1").style.visibility = "hidden";
    document.getElementById("set2").style.visibility = "hidden";
    document.getElementById("set3").style.visibility = "visible";
  }
}