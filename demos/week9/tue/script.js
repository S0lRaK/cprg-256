const myListOfItems = [];
function addTextContents() {
  const domInput = document.querySelector("input");
  const txt = domInput.value;
  if (!txt) {
    return;
  }
  domInput.value = "";
  const obj = {
    id:  Math.random(),
    name : txt
  };
  myListOfItems.push(obj);
  displayItems();
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
