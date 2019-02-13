function setdisplay(val) {
  if (val == 1) {
    document.getElementById("set1").style.display = "block";
    document.getElementById("set2").style.display = "none";
    document.getElementById("set3").style.display = "none";
  }
  if (val == 2) {
    document.getElementById("set1").style.display = "none";
    document.getElementById("set2").style.display = "block";
    document.getElementById("set3").style.display = "none";
  }
  if (val == 3) {
    document.getElementById("set1").style.display = "none";
    document.getElementById("set2").style.display = "none";
    document.getElementById("set3").style.display = "block";
  }
}