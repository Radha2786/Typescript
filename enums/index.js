"use strict";
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    name: "radha",
    email: 'radhasharma2786@gmail.com',
    role: Roles.admin
};
const printUser = (user) => {
    return `hey I am ${user.name} and I am ${user.role}`;
};
console.log(printUser(user1));
