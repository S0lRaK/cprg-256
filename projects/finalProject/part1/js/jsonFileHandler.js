"use strict";

let data;

fetch("data/CustomersData.json")
	.then(function(response) {
		if (!response.ok) {
			throw new Error("HTTP error, status = " + response.status);
		}
		return response.json();
	})
	.then(function(json) {
		data = json;
	});
