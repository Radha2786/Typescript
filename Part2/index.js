"use strict";
// let nanValue: number= NaN;
// console.log(nanValue);  
let longText = "hey Radha this side";
let shortText = longText.slice(0, 10);
console.log(shortText);
// todo 👉  String Comparison: 
// Declare two variables str1 and str2 of type string and assign them different sentences. Compare the two strings and store the result (true or false) in a variable called areEqual.
let str1 = "Radha";
let str2 = "radha";
let areEqual = str1 === str2;
console.log(areEqual);
//  todo 👉  String Template: 
// Declare variables product and price of type string and number, respectively. Create a string using template literals to display the product and its price in the format "The product {product} is priced at {price} dollars."
let product = "shoes";
let price = 500;
let result = `The product ${product} is priced at ${price} Rs`;
console.log(result);
function isEven(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEven(5));
let maxNumber = Number.MAX_SAFE_INTEGER;
let BigNumber = 9007199254740992n;
console.log(BigNumber);
