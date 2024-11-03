"use strict";
// function logAndReturn<T>(value: T): T {
//     return value;
// }
// console.log(logAndReturn<number>(2));
// console.log(logAndReturn<string>('Hello'));
// console.log(logAndReturn<boolean>(true));
// -------------- Extend Keyword ------------------
function logAndReturn(val1, val2) {
    return val1 + val2;
}
// console.log(logAndReturn(2, 3));
// What if I have to send multiple types of arguments? In that case we can use Generics in this way 
function Add(val1, val2, val3) {
    console.log(typeof val1);
    console.log(typeof val2);
    console.log(typeof val3);
}
Add(1, "radha", true);
