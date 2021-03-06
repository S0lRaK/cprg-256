"use strict";

window.onload = init;

$(function() {
	$("#button-grade").popover({
		container: "body",
		trigger: "focus"
	});
});

function init() {
	setQuiz();
	setInputsClickEvent();
}

function setQuiz() {
	const quizListSection = document.querySelector("#quiz ol");

	for (const question of data) {
		const listItem = document.createElement("li");

		listItem.setAttribute(
			"class",
			"list-group-item d-flex flex-column align-items-start"
		);

		const questionNumElement = document.createElement("h3");
		questionNumElement.innerText = "Question " + question.qNumber + ":";

		const questionElement = document.createElement("p");
		questionElement.innerText = question.qTitle;

		const optionsDivElement = document.createElement("div");
		optionsDivElement.classList.add("option-group");
		const answers = question.answerChoices;

		answers.forEach(answer => {
			const optionDivElement = document.createElement("div");
			optionDivElement.classList.add("custom-control", "custom-radio");
			const optionInputElement = document.createElement("input");
			optionInputElement.classList.add("custom-control-input");
			optionInputElement.setAttribute("type", "radio");
			optionInputElement.setAttribute(
				"id",
				"q" + question.qNumber + answer.label
			);
			optionInputElement.setAttribute("value", answer.label);
			optionInputElement.setAttribute("name", "q" + question.qNumber);
			const optionLabelElement = document.createElement("label");
			optionLabelElement.classList.add("custom-control-label");
			optionLabelElement.setAttribute(
				"for",
				"q" + question.qNumber + answer.label
			);
			optionLabelElement.innerText =
				answer.label.toUpperCase() + ") " + answer.title;

			optionDivElement.append(optionInputElement, optionLabelElement);
			optionsDivElement.append(optionDivElement);
		});

		listItem.append(questionNumElement, questionElement, optionsDivElement);

		quizListSection.append(listItem);
	}
}

function setInputsClickEvent() {
	const inputs = document.querySelectorAll("input[type=radio]");

	inputs.forEach(input => {
		input.addEventListener("click", checkEnablingGradingQuiz);
	})
}

function checkEnablingGradingQuiz() {
	const checkedInputs = document.querySelectorAll("input[type=radio]:checked");
	const questions = document.querySelectorAll(".option-group");

	if (checkedInputs.length == questions.length) {
		const buttonGrade = document.getElementById("button-grade");
		buttonGrade.classList.remove("disabled");
	}
}

function gradeQuiz() {
	const optionGroupsElements = document.querySelectorAll(".option-group");

	let correctAnswers = 0;

	optionGroupsElements.forEach(group => {
		const checkedInput = group.querySelector("input:checked");

		switch (checkedInput.id) {
			case "q1b":
			case "q2a":
			case "q3d":
			case "q4a":
			case "q5c":
				correctAnswers++;
				break;
		}
	});

	const quizResultDivElement = document.getElementById("button-grade");
	quizResultDivElement.dataset.content =
		correctAnswers + "/" + optionGroupsElements.length;

	$("#button-grade").popover("show");
}
