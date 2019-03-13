// const baseSquareCake = {
//   numberOfLayers: 0,
//   basePrice: 20
// };

// const baseRectCake = {
//   numberOfLayers: 0,
//   basePrice: 18
// };

// let's try using a CONSTANT object to
// hold some DEFAULT values that we can reference.
// If at any point, we need to change the DEFAULT values
// then we can make the change here in a single place.
const baseRoundCake = {
  numberOfLayers: 1,
  basePrice: 15,
  incrementalPriceForEachLayer: 7.5,
  radius: 15
};

// define a function to calculate a Round Cake
function calculateRoundCakeTotal(userSelectedLayers = 1, userSelectedRadius = 15) {

  let priceComponents = [];
  priceComponents.push(baseRoundCake.basePrice);

  // base price assumes 1 layer
  // calculate cost for each ADDITONAL layer
  const additionalNumberofLayers = userSelectedLayers - 1;
  priceComponents.push(additionalNumberofLayers * baseRoundCake.incrementalPriceForEachLayer);

  let total = 0;
  for (let item of priceComponents) {
    total += item;
  }
  return total;
}

function calculateTotal() {
  // Example 2
  const useCase1 = example2();

  var subTotal = calculateRoundCakeTotal(
    useCase1.userSelectedLayers, 
    useCase1.userSelectedRadius
    );
  displayTotal(subTotal);
}

function displayTotal(total) {
  const output = document.getElementById("output");
  output.innerHTML = total;
}

// Use Case
// Example 2
/*
  A customer orders a round cake, minimum size with 2 layers. 
*/
function example2() {
  return {
    userSelectedLayers : 2,
    userSelectedRadius : 15
  }
}
// Use Case
// Example 2B
// Three layers
// function example2b() {
//   return {
//     userSelectedLayers : 3,
//     userSelectedRadius : 15
//   }
// }