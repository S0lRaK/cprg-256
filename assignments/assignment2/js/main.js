"use strict";

window.onload = init;

/* Global variables */
let customers = {};

function init() {
	setCurrentDate();
	setClickItem();
}

function setCurrentDate() {
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
}

function setClickItem() {
	const itemElements = document.querySelectorAll(".item");
	itemElements.forEach(item => {
		item.addEventListener("click", event => {
			setSelectedItem(event, item, itemElements);
			enableQuantityInput(event);
		});
	});
}

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
	const quantityInputElement = itemDivElement.querySelector(
		"input[name='quantity']"
	);
	const itemSelected = itemDivElement.querySelector(".selected");
	const buttonElement = itemDivElement.querySelector("button");

	if (quantityInputElement.value > 0 && itemSelected) {
		buttonElement.classList.remove("disabled");
		buttonElement.removeAttribute("disabled");
	} else {
		buttonElement.classList.add("disabled");
		buttonElement.setAttribute("disabled", "");
	}
}

function setSelectedItem(event, selectedItem, items) {
	if (event) {
		items.forEach(item => {
			if (selectedItem == item) {
				item.classList.add("selected");
			} else if (item.dataset.option == selectedItem.dataset.option) {
				item.classList.remove("selected");
			}
		});
	}
}

function enableQuantityInput(event) {
	const currentOption = event.currentTarget.dataset.option;
	const currentOptionElement = document.querySelector("#" + currentOption);
	const quantityInputElement = currentOptionElement.querySelector("input[name='quantity']");

	quantityInputElement.removeAttribute("disabled");
}
