"use strict";
const student1 = {
    name: "Radha",
    age: 21,
    greet: (country) => {
        return `Hello from ${country}`;
    }
};
const introduction = (student1) => {
    const { name, age } = student1;
    return `Welcome my name is ${name} and I am ${age} years old`;
};
console.log(introduction(student1));
