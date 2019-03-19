const myNameList = [];

function clickme() {
  const domName = document.querySelector("#name");
  const name = domName.value.trim();
  if (!name) {
    return;
  }
  const obj = {
    'id': String(Math.random()),
    'name': name
  }
  myNameList.push(obj);
  domName.value = "";
  displayNames();
}

function displayNames() {
  const mylist = document.querySelector("#mylist");
  mylist.innerHTML = "";
  for (let obj of myNameList) {
    const name = obj.name;
    const listItem = document.createElement("li");
    listItem.innerText = name;

    const btn = document.createElement("button");
    btn.innerText = "Delete"
    btn.setAttribute("onclick", "deleteME(this);")
    btn.setAttribute("data-name", name);
    btn.setAttribute("data-id", obj.id);
    listItem.append(btn);


    mylist.append(listItem);
  }
}

// function findme(id) {
//   return this.id = id;
// }

function deleteME(btn) {
  console.log(btn);
  console.log(btn.dataset.name)
  console.log(btn.dataset.id)
  const objectID = btn.dataset.id;

  console.log("delete function called.")
  // const itemOfInterest = myNameList.find(
  //   function findme(item) {
  //     return item.id = objectID;
  //   }
  // )
  //console.log(itemOfInterest);


  const idx = myNameList.findIndex(
    function (item) {
      return item.id == objectID;
    }
  )
  myNameList.splice(idx, 1);
  displayNames();

  // const idx = myNameList.indexOf(itemOfInterest);

  //console.log(idx);
}
