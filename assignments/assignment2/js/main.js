"use strict";

window.onload = function() {
	let month = new Array(
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	);

	let today = new Date();
	let dd = today.getDate();
	let mm = today.getMonth();
	let currentMonth = month[mm];
	let yyyy = today.getFullYear();
	today = currentMonth + " " + dd + ", " + yyyy;

	document.getElementById("current-date").innerHTML = today;
};

/* Global variables */
let customers = {};

function showSection(section) {
	hideOtherSections(section);
	let selectedSection = document.getElementById(section.id);

	if (selectedSection.classList.contains("hidden"))
		selectedSection.classList.toggle("hidden");
}

function hideOtherSections(visibleSection) {
	let sections = ["pizza", "sandwich", "drink"];

	for (const section of sections) {
		if (visibleSection.id != section)
			document.getElementById(section).classList.add("hidden");
	}
}

function enableAddToOrder(item) {
	const itemDivElement = document.getElementById(item);
	const quantityInputElement = itemDivElement.querySelector("input[name='quantity']");
	const buttonElement = itemDivElement.querySelector("button");

	if (quantityInputElement.value > 0) {
		buttonElement.classList.remove("disabled");
		buttonElement.removeAttribute("disabled");
	} else {
		buttonElement.classList.add("disabled");
		buttonElement.setAttribute("disabled", "");
	}
}