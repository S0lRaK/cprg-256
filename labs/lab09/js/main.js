let filterSelected = "id";

function search() {
	const inputElement = document.querySelector("#search-term-input");
	let searchResults;

	if (filterSelected == "id") {
		searchResults = clientData.filter(client => {
			return client.id == inputElement.value;
		});
	} else if (filterSelected == "lastName") {
		searchResults = clientData.filter(client => {
			return client.lastName.includes(inputElement.value);
		});
	} else if (filterSelected == "phone") {
		searchResults = clientData.filter(client => {
			return client.phone.includes(inputElement.value);
		});
	}

	displayResults(searchResults);
}

function checkKey(event) {
	let keyPressed = event.keyCode;

	if (keyPressed == 13) {
		search();
	}
}

function filter(property) {
  filterSelected = property;
  
  setActiveFilter(property)
}

function setActiveFilter(button) {
  const filterButtons = document.querySelectorAll("#filters button");

  filterButtons.forEach(filterButton => {
    filterButton.classList.remove("active");

    if (filterButton.dataset.filter == button) {
      filterButton.classList.add("active");
    }
  });
}

function displayResults(results) {
	const list = document.querySelector("#search-result ol");

	list.innerHTML = "";

	for (const client of results) {
		const listItem = document.createElement("li");

		listItem.setAttribute(
			"class",
			"list-group-item d-flex flex-column align-items-start"
		);

		const idElement = document.createElement("span");
		idElement.innerText = "ID: " + client.id;

		const firstNameElement = document.createElement("span");
		firstNameElement.innerText = "First Name: " + client.firstName;

		const lastNameElement = document.createElement("span");
		lastNameElement.innerText = "Last Name: " + client.lastName;

		const addressElement = document.createElement("span");
		addressElement.innerText = "Address: " + client.address;

		const postalCodeElement = document.createElement("span");
		postalCodeElement.innerText = "Postal Code: " + client.postalCode;

		const phoneElement = document.createElement("span");
		phoneElement.innerText = "Phone: " + client.phone;

		const typeElement = document.createElement("span");
		typeElement.innerText = "Type: " + client.type;

		listItem.append(
			idElement,
			firstNameElement,
			lastNameElement,
			addressElement,
			postalCodeElement,
			phoneElement,
			typeElement
		);

		list.append(listItem);
	}
}
