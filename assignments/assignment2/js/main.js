"use strict";

window.onload = init;

/* Global variables */
let customer = { customerInfo: {}, orders: [] };

function init() {
	setCurrentDate();
	setClickItem();
	setClickAdd();
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

function setClickAdd() {
	const addButtonElements = document.querySelectorAll(".add-to-order");
	addButtonElements.forEach(button => {
		button.addEventListener("click", event => {
			addToOrder(event, button);
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
	const quantityInputElement = currentOptionElement.querySelector(
		"input[name='quantity']"
	);

	quantityInputElement.removeAttribute("disabled");
}

function addToOrder(event, button) {
	if (event) {
		const currentOption = button.dataset.option;
		const currentOptionElement = document.querySelector("#" + currentOption);

		const selectedItem = currentOptionElement.querySelector(".item.selected");
		const selectedItemTitle = selectedItem.querySelector(".title").innerText;

		let individualPrice;

		if (currentOptionElement.id == "sandwich") {
			individualPrice = selectedItem.querySelector(".price").dataset.price;
		} else {
			individualPrice = currentOptionElement.querySelector(".size select")
				.value;
		}

		let numExtras = 0;
		let toppingsList = [];

		if (currentOptionElement.id == "pizza") {
			const toppings = currentOptionElement.querySelectorAll(
				".topping input:checked"
			);
			numExtras = toppings.length;
			toppings.forEach(topping => {
				toppingsList.push(topping.value);
			});
		}

		const quantity = currentOptionElement.querySelector(".quantity input")
			.value;

		const price = individualPrice * quantity + numExtras * prices.topping;

		let order = {
			option: currentOption,
			item: selectedItemTitle,
			quantity: quantity,
			price: price,
			extras: toppingsList
		};

		customer.orders.push(order);

		displayOrders();
		showContactSection();
		showOrderButton();
	}
}

function showContactSection() {
	const contactForm = document.getElementById("contact");
	contactForm.classList.remove("hidden");
}

function displayOrders() {
	const list = document.querySelector("#order ol");

	list.innerHTML = "";

	customer.orders.forEach(order => {
		const listItem = document.createElement("li");
		listItem.setAttribute("class", "list-group-item d-flex flex-row justify-content-between");

		const quantityElement = document.createElement("span");
		quantityElement.innerText = order.quantity + " ";

		const itemElement = document.createElement("span");
		const itemElementTitle = document.createElement("span");
		itemElementTitle.innerText = order.item;
		itemElement.appendChild(itemElementTitle);

		let extrasElement = "";

		if (order.option == "pizza" && order.extras.length > 0) {
			extrasElement = document.createElement("span");
			extrasElement.innerText = ", " + order.extras;
			itemElement.appendChild(extrasElement);
		}

		const priceElement = document.createElement("span");
		priceElement.innerText = " $" + order.price;

		listItem.append(quantityElement, itemElement, priceElement);

		list.append(listItem);
	})
}

function showOrderButton() {
	const orderButton = document.getElementById("checkout");
	orderButton.classList.remove("hidden");
}
