'use strict';
function makeTransaction(quantity, pricePerDroid) {
  const priseDroid = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${priseDroid} credits!`;
}
console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
