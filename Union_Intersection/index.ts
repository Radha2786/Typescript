
const userInput : (val:number | string | boolean) => string | number | boolean = (val : string | number | boolean) : string | boolean | number =>{
    if(typeof val === 'number'){
        return val*10;
    }else if(typeof val === 'string'){
        return val.toUpperCase();
    }else{
        return val;
    }
}

console.log(userInput(true));


// ------------ Intersection ------------ 
// Intersection is the combination of two types.
// It is represented by the & symbol.

type UserDetails = {
    name: string;
    age: number;
}

type MyLocation = {
    city: string;
    country: string;
}

const userdetails : UserDetails & MyLocation = {
    name:"Radha",
    age:21,
    city:"Banglore",
    country:"India"
}

const createUserProfile : (user: UserDetails & MyLocation) => void = (user : UserDetails & MyLocation) : void => {
    console.log(`Hey I am ${user.name} , I are from ${user.city} , ${user.country}`);
}
createUserProfile(userdetails);
 

