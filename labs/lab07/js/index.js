const persons = [];

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
	}
}

function clearInputs(input1, input2) {
	input1.value = "";
	input2.value = "";
}

function display() {
	const list = document.querySelector("#output ol");
	list.innerHTML = "";
	let id = 1;

	for (const person of persons) {
    person.id = id;
    id++;

		const listItem = document.createElement("li");
    listItem.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
		listItem.innerText = person.id + ") " + person.firstName + " " + person.lastName;

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
}

function deleteListElement(element) {
  const personId = element.dataset.id;
  const personIndex = persons.findIndex(person => person.id == personId);

  persons.splice(personIndex, 1);
  display();
}