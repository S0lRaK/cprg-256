var urllist = [];

function addToList() {
  var urlelement = document.getElementById('url');



  if (urlelement != null) {
    var url = urlelement.value;
    urllist.push(url);
  }

  displayURLS();

}

function displayURLS() {
  const display = document.getElementById('display');
  for (var url of urllist) {
    var anchor = document.createElement('a');
    anchor.innerHTML = url;
    anchor.href = url;
    anchor.target = "_blank";
    var urlitem = document.createElement('li');
    urlitem.append(anchor);
    display.append(urlitem);

  }
}