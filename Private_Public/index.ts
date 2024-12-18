class NewUser {
    readonly city : string = "Delhi";
    constructor (
        public email: string,
        public name: string,
        private userId: number
    ){

    }
}
const Radha = new NewUser("radha@gmail.com", "radha", 1);
// Radha.city = "Mathura";
console.log(Radha);

//there is this concept of private and public in typescript which is not there in javascript 
