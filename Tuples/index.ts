
// Array  

const person1 : any[] = ["radha", 21, true];
const person2 : any[] = [21,"boomer", true];

// console.log(person1[0]);
// as we can see there is no specific type or order in the above array 

// --------------------------Tuple Use Case ---------------------------- 
// if we know about the specific order and size of the array we can use tuples

// Tuple 

type Person = readonly [string, number, boolean];

const person3 : Person = ["yash", 22, true];
const person4 : Person = ["Harshita", 22, true];
// const person5 : Person = [23,"Akash", false];   // This will give error as the order is not correct

console.log(person3[0]);

let Tuser : [string, number, boolean]= ["tanishq",21, true];
 Tuser = ["yash",21, true];
 console.log(Tuser);