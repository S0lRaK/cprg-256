function updatePrice() {
  // clear out the unordered list
  const flavorListOutput = document.getElementById('flavorList');
  flavorListOutput.innerHTML = "";

  // initialize our total to zero
  let runningTotal = 0;

  // clear out the total sum
  const total = document.getElementById('total');
  total.innerHTML = runningTotal.toFixed(2);

  // get a list of selected checkbox(s) buttons
  const flavorListHTML = document.querySelectorAll('input[name=flavor]:checked');
  for (let flav of Array.from(flavorListHTML)) {
    // To aid debugging, let's write to the console
    const msg = `${flav.dataset.item}: $${flav.value}`;
    console.log(msg);

    // Add the price of this item to the total price
    runningTotal += Number(flav.value);

    // Display the items selected back to the user in a unordered list
    let item = document.createElement('li');
    item.innerHTML = msg;
    flavorListOutput.append(item);
  }

  // Update the total price displayed to the user
  total.innerHTML = runningTotal.toFixed(2);
}