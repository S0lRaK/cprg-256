var xhr;

function getCalcFV() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("displayapp").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "futurevalue.html", true);
  xhr.send();
}

function getMortgage() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("displayapp").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "mortgage.html", true);
  xhr.send();
}