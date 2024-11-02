"use strict";
const userInput = (val) => {
    if (typeof val === 'number') {
        return val * 10;
    }
    else if (typeof val === 'string') {
        return val.toUpperCase();
    }
    else {
        return val;
    }
};
console.log(userInput(true));
const userdetails = {
    name: "Radha",
    age: 21,
    city: "Banglore",
    country: "India"
};
const createUserProfile = (user) => {
    console.log(`Hey I am ${user.name} , I are from ${user.city} , ${user.country}`);
};
createUserProfile(userdetails);
