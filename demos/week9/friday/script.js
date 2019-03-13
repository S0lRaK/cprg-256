let data = {
  "status": "success",
  "message": "https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_5551.jpg"
}

//window.onload = init;

function clickme() {
  const output = document.querySelector("#output");
  output.innerHTML = "";
  const img = document.createElement("img");
  img.src = data.message;
  img.alt = "dog image";
  output.append(img);
}

function getimage() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  
  // when we get a successful response, do the stuff inside processResponse
  // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/load_event
  xhr.addEventListener("load", processResponse);
  
  xhr.send();
}

function processResponse() {
  data = JSON.parse(this.responseText);
  console.log("function processResponse has finished.")
  
  // update the image displayed
  clickme();
}