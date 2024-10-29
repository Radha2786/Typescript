"use strict";
const fun = (val) => {
    return val;
};
console.log(fun("radha"));
const heroes = ["radha", "yash", "Harshi"];
heroes.map((hero) => {
    return 1;
});
// void = returns nothing 
// never = never returns anything for example useCase in case of error handling 
// ------- example --------
function fail(msg) {
    throw new Error(msg);
}
// unknown = we dont know the type of the variable 
