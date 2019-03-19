function getHtml() {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      document.getElementById("contents").innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", "canadafacts.html", true);
  xhr.send();
}