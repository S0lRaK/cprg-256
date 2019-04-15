"use strict";

let filterSelected = "CustomerID";

function search() {
	const inputElement = document.querySelector("#search-term-input");
	let inputValue = inputElement.value;

	let searchResults;

	if (filterSelected == "CustomerID") {
		searchResults = data.filter(customer => {
      return customer.CustomerID.toString().startsWith(inputValue);
		});
	} else if (filterSelected == "LastName") {
		let firstLetter = inputValue.charAt(0).toUpperCase();
		let otherLetters = inputValue.slice(1).toLowerCase();
		let capitalized = firstLetter + otherLetters;

		searchResults = data.filter(customer => {
			return customer.LastName.startsWith(capitalized);
		});
  } else if (filterSelected == "CompanyName") {
    let firstLetter = inputValue.charAt(0).toUpperCase();
    let otherLetters = inputValue.slice(1);
    let capitalized = firstLetter + otherLetters;

    searchResults = data.filter(customer => {
			return customer.CompanyName.startsWith(capitalized);
		});
  } else if (filterSelected == "Phone") {
		searchResults = data.filter(customer => {
			return customer.Phone.startsWith(inputValue);
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

  setActiveFilter(property);
  search();
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

	for (const customer of results) {
		const listItem = document.createElement("li");

		listItem.setAttribute(
			"class",
			"list-group-item d-flex flex-column align-items-start"
		);

		const idElement = document.createElement("span");
    idElement.innerText = "Customer ID: " + customer.CustomerID;
    
    const titleElement = document.createElement("span");
		titleElement.innerText = "Title: " + customer.Title;

		const firstNameElement = document.createElement("span");
		firstNameElement.innerText = "First Name: " + customer.FirstName;

		const lastNameElement = document.createElement("span");
		lastNameElement.innerText = "Last Name: " + customer.LastName;

		const suffixElement = document.createElement("span");
		suffixElement.innerText = "Suffix: " + customer.Suffix;

    const companyNameElement = document.createElement("span");
		companyNameElement.innerText = "Company Name: " + customer.CompanyName;
    
    const phoneElement = document.createElement("span");
		phoneElement.innerText = "Phone: " + customer.Phone;

		listItem.append(
      idElement,
      titleElement,
			firstNameElement,
			lastNameElement,
			suffixElement,
			companyNameElement,
			phoneElement,
		);

		list.append(listItem);
	}
}