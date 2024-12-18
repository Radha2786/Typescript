var NewUser = /** @class */ (function () {
    function NewUser(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Delhi";
    }
    return NewUser;
}());
var Radha = new NewUser("radha@gmail.com", "radha", 1);
Radha.city = "Mathura";
console.log(Radha);
