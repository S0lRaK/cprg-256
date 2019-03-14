let persons = [];

window.onload = init;

function init() {
	retrieveData();
	display();
}

function add() {
	const inputFirstName = document.querySelector("#first-name");
	const inputLastName = document.querySelector("#last-name");

	if (inputFirstName.value || inputLastName.value) {
		const person = {
			id: null,
			firstName: inputFirstName.value.trim(),
			lastName: inputLastName.value.trim()
		};

		persons.push(person);
		clearInputs(inputFirstName, inputLastName);
		display();
		saveData(person);
	}
}

function clearInputs(input1, input2) {
	input1.value = "";
	input2.value = "";
}

function display() {
	const list = document.querySelector("#output ol");
	const buttonDeleteAll = document.querySelector("#button-delete-all");

	list.innerHTML = "";
	let id = 1;

	for (const person of persons) {
		person.id = id;
		id++;

		const listItem = document.createElement("li");
		listItem.setAttribute(
			"class",
			"list-group-item d-flex justify-content-between align-items-center"
		);
		listItem.innerText =
			person.id + ") " + person.firstName + " " + person.lastName;

		const deleteButton = document.createElement("button");
		const deleteIcon = document.createElement("i");
		deleteIcon.setAttribute("class", "material-icons");
		deleteIcon.innerText = "delete";
		deleteButton.appendChild(deleteIcon);
		deleteButton.setAttribute("class", "btn btn-outline-danger btn-sm");
		deleteButton.setAttribute("onclick", "deleteListElement(this)");
		deleteButton.setAttribute("data-id", person.id);
		listItem.append(deleteButton);

		list.append(listItem);
	}

	if (persons.length > 0) {
		buttonDeleteAll.classList.replace("d-none", "d-flex");	
	} else {
		buttonDeleteAll.classList.replace("d-flex", "d-none");	
	}
	
}

function deleteListElement(element) {
	const personId = element.dataset.id;
	const personIndex = persons.findIndex(person => person.id == personId);

	persons.splice(personIndex, 1);

	persons.forEach(person => {
		if (person.id >= personIndex) {
			person.id = person.id - 1;
		}
	});

	localStorage.removeItem("person" + personId);

	for (let index = personId; index < localStorage.length + 1; index++) {
		const personNum = parseInt(index) + 1;
		const person = JSON.parse(localStorage["person" + personNum]);
		person.id = person.id -1;
		saveData(person);
		localStorage.removeItem("person" + personNum);
	}

	display();
}

function saveData(item) {
	localStorage.setItem("person" + item.id, JSON.stringify(item));
}

function retrieveData() {
	const data = localStorage.getItem("person1");

	if (data) {
		for (let index = 1; index < localStorage.length + 1; index++) {
			const person = JSON.parse(localStorage["person" + index]);
			persons.push(person);
		}
	}
}

function deleteAll() {
	persons.length = 0;

	display();

	localStorage.clear();
}