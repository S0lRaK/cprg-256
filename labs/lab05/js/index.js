window.onload = function () {
    let month = new Array("January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October", "November", "December");

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth();
    let currentMonth = month[mm];
    let yyyy = today.getFullYear();
    today = currentMonth + ' ' + dd + ', ' + yyyy;``
    document.getElementById('current-date').innerHTML = today;
};

function showSection(section) {
    hideOtherSections(section);
    let selectedSection = document.getElementById(section.id);
    /* selectedSection.className === 'hidden' ? selectedSection.className = 'visible' : selectedSection.className = "hidden"; */
    if (selectedSection.className === 'hidden')
        selectedSection.classList.remove('hidden');
}

function hideOtherSections(visibleSection) {
    let sections = ['pizza', 'sandwich', 'drink'];

    for (const section of sections) {
        if (visibleSection.id != section)
            document.getElementById(section).className = 'hidden';
    }
}

function showOrder(event) {
    let orderButton = document.getElementById('submit-order');
    let contactForm = document.getElementById('contact');
    let quantity = event.target.value;

    if (quantity > 0) {
        orderButton.classList.remove('hidden');
        contactForm.classList.remove('hidden');
    }
    else {
        orderButton.className = 'hidden';
        contactForm.className = 'hidden';
    }
}

function order(event) {
    event.preventDefault();

    let pizzas = document.querySelectorAll("#pizza .option");
    let sandwiches = document.querySelectorAll("#sandwich .option");
    let drinks = document.querySelectorAll("#drink .option");

    let pizzaPrices = [16.50, 14.00, 11.50, 8.50];
    let extraToppingPrice = 1.75;
    let sandwichPrices = [7.50, 8.50, 9.50, 9.50];
    let drinkPrices = [2.00, 1.75, 1.25];

    let orderTotal = 0;

    pizzas.forEach(function (pizza) {
        let quantity = pizza.children[3].childNodes[3].value;
        let size = pizza.children[2].children[1].value;
        let toppings = pizza.children[4].children[1].children;
        console.log(toppings);

        if (quantity > 0) {
            switch (size) {
                case 'extra-large':
                    orderTotal += pizzaPrices[0] * quantity;
                    break;
                case 'large':
                    orderTotal += pizzaPrices[1] * quantity;
                    break;
                case 'medium':
                    orderTotal += pizzaPrices[2] * quantity;
                    break;
                case 'small':
                    orderTotal += pizzaPrices[3] * quantity;
                    break;
                default:
                    break;
            }

            toppings.forEach(function (topping) {
                if (topping.children[0].checked)
                    orderTotal += extraToppingPrice;
            });
        }
    });

    let index = 0;

    sandwiches.forEach(function (sandwich) {
        let quantity = sandwich.children[3].children[1].value;

        if (quantity > 0)
            orderTotal += sandwichPrices[index] * quantity;

        index++;
    });

    drinks.forEach(function (drink) {
        let quantity = drink.children[3].children[1].value;
        let size = drink.children[2].children[1].value;

        if (quantity > 0) {
            switch (size) {
                case 'large':
                    orderTotal += drinkPrices[0] * quantity;
                    break;
                case 'medium':
                    orderTotal += drinkPrices[1] * quantity;
                    break;
                case 'small':
                    orderTotal += drinkPrices[2] * quantity;
                    break;
                default:
                    break;
            }
        }
    });

    let orderSection = document.getElementById('order');

    orderSection.innerHTML = "Total Cost: $" + orderTotal;
}