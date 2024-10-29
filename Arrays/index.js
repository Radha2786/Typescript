"use strict";
function CalculateAverage(arr) {
    let avg = 0;
    avg = arr.reduce(SumOfArr) / arr.length;
    return avg;
}
function SumOfArr(total, curr) {
    return total += curr;
}
// console.log(CalculateAverage([1,2,3,4,5]));
const products = {
    name: "diamond ring",
    price: 900000,
    quantity: 2,
    category: {
        name: "jwellery",
        type: "gold"
    }
};
console.log(products.category.name);
