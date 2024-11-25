//JavaScript basic

let myName = 'Ngoc Hung Bui';

let coffeeCost = 5;
let bagelCost = 3;
let soupCost = 9;

let totalCost = coffeeCost + bagelCost*2 + soupCost;
console.log(`Cost of Food is: $${totalCost}`);

let totalCostTax = totalCost*0.1;
console.log(`Tax 10%: $${totalCostTax}`);

console.log(`Total bill: $${totalCost + totalCostTax}`);