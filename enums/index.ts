
enum Roles {
    user= "user",
    admin = "admin"
}

type User = {
    name: string;
    email:string;
    role: Roles;
}

const user1 : User= {
    name:"radha",
    email:'radhasharma2786@gmail.com',
    role : Roles.admin
}

const printUser : (user: User)=> string = (user) : string =>{

    return `hey I am ${user.name} and I am ${user.role}`;
}

console.log (printUser(user1));