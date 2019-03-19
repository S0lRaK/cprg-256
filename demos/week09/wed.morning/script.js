let myListOfItems = [];

// this will be my KEY for referencing items in local Storage
const MYKEY = "mylist";

// When page is finished loading, do some initialization
window.onload = start();

// When page is ready
document.onready = displayItems();

function start() {
  const mystr = localStorage.getItem(MYKEY);
  if (mystr) {
    myListOfItems = JSON.parse(mystr);
  }
}
function addTextContents() {
  const domInput = document.querySelector("input");
  const txt = domInput.value;
  if (!txt) {
    return;
  }
  domInput.value = "";
  const obj = {
    id: Math.random(),
    name: txt
  };
  myListOfItems.push(obj);
  saveToStorage();
  displayItems();
}

function saveToStorage() {
  // save our GLOBAL ARRAY to localstorage
  localStorage.setItem(MYKEY, JSON.stringify(myListOfItems));
}

function displayItems() {
  const domMyList = document.querySelector("#mylist");
  domMyList.innerHTML = "";
  for (let obj of myListOfItems) {
    const listItem = document.createElement("li");
    listItem.innerText = obj.name;
    const btn = document.createElement("button");
    btn.innerHTML = "delete";
    //const myid = `deleteME`
    btn.setAttribute("onclick", `deleteME(${obj.id})`);
    btn.setAttribute("data-name", obj.name);
    btn.setAttribute("data-id", obj.id);
    listItem.append(btn);
    domMyList.append(listItem);
  }
}

function deleteME(userid) {
  const idx = myListOfItems.findIndex(item => item.id == userid);
  console.log(idx);
  myListOfItems.splice(idx, 1);
  displayItems();
}
