
interface Greet {
    name: string;
    age: number;
}

// Interface is just like loose form of class where we can define the properties and their types 

const greets :Greet = {
    name: "Radha",
    age: 21
}

interface UserInterface {
    email: string,
    userId: number,
    // startTrial: () => string 
    startTrial() : string // another way of defining a function in interface 
    getCoupon(couponname: string, value:number): number
}

const radha: UserInterface = {
    email: "radha123@gmail.com",
    userId: 123,
    startTrial : () => {
        return "trial started"
    },
    getCoupon: (name:"radhasdiscount", offer:500) =>{
        return 500;
    }
}