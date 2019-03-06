const RATE_CAD = 1;
const RATE_EURO = 0.66;
const RATE_YEN = 83.82;
const RATE_POUND = 0.57;
const RATE_USD = 0.75;

const SYMBOL_CAD = "C$";
const SYMBOL_EURO = "€";
const SYMBOL_YEN = "¥";
const SYMBOL_POUND = "£";
const SYMBOL_USD = "US$";

let sourceAmount;
let sourceRate;

function setActiveCurrency(event, currency, section) {
	let inputPrependElement = document.querySelector("#input-prepend-" + section);

	let buttonGroup = document.querySelectorAll("#" + section + " .btn");

	buttonGroup.forEach(function(button) {
		if (button.classList[1] == "btn-primary") {
			button.classList.replace("btn-primary", "btn-secondary");
		}
	});

	let buttonCliked = event.target;
	buttonCliked.classList.replace("btn-secondary", "btn-primary");

	switch (currency) {
		case "cad":
			inputPrependElement.innerHTML = SYMBOL_CAD;
			break;
		case "euro":
			inputPrependElement.innerHTML = SYMBOL_EURO;
			break;
		case "yen":
			inputPrependElement.innerHTML = SYMBOL_YEN;
			break;
		case "pound":
			inputPrependElement.innerHTML = SYMBOL_POUND;
			break;
		case "usd":
			inputPrependElement.innerHTML = SYMBOL_USD;
			break;
	}
}

function setSourceCurrency(event, currency) {
	setActiveCurrency(event, currency, "source");

	switch (currency) {
		case "cad":
			sourceRate = 1 / RATE_CAD;
			break;
		case "euro":
			sourceRate = 1 / RATE_EURO;
			break;
		case "yen":
			sourceRate = 1 / RATE_YEN;
			break;
		case "pound":
			sourceRate = 1 / RATE_POUND;
			break;
		case "usd":
			sourceRate = 1 / RATE_USD;
			break;
	}

	convertAmount();
}

function setTargetCurrency(event, currency) {
	setActiveCurrency(event, currency, "target");
	convertAmount();
}

function convertAmount() {
	if (sourceRate == null) {
		sourceRate = 1;
	}

	let inputTargetElement = document.querySelector("#input-target");

	let sourceAmount = document.querySelector("#input-source").value;
	let targetCurrency = document.querySelector("#target button.btn-primary")
		.innerText;
	let targetAmount;

	switch (targetCurrency) {
		case "Canadian Dollar":
    exchangeRate = sourceRate * RATE_CAD;  
    targetAmount = sourceAmount * exchangeRate;
			break;
		case "Euro":
    exchangeRate = sourceRate * RATE_EURO;  
    targetAmount = sourceAmount * exchangeRate;
			break;
		case "Japanese Yen":
    exchangeRate = sourceRate * RATE_YEN;  
    targetAmount = sourceAmount * exchangeRate;
			break;
		case "UK Pound Sterling":
    exchangeRate = sourceRate * RATE_POUND;  
    targetAmount = sourceAmount * exchangeRate;
			break;
		case "US Dollar":
    exchangeRate = sourceRate * RATE_USD;  
    targetAmount = sourceAmount * exchangeRate;
			break;
	}

	inputTargetElement.value = targetAmount.toFixed(2);

	setExchangeRate(targetCurrency, exchangeRate);
}

function setExchangeRate(targetCurrency, exchangeRate) {
	let sourceCurrency = document.querySelector("#source button.btn-primary")
		.innerText;
	let sourceRateElement = document.querySelector("#source-rate");
	let targetRateElement = document.querySelector("#target-rate");

	sourceRateElement.innerHTML = "1 " + sourceCurrency;
	targetRateElement.innerHTML = exchangeRate.toFixed(2) + " " + targetCurrency;
}
