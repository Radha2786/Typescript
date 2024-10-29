
type Student ={
    name:string;
    age:number;
    greet: (country:string) => string;   // method call signature
}

const student1: Student = {
    name:"Radha",
    age:21,
    greet: (country: string)=>{
        return `Hello from ${country}`;
    }
}

const introduction : (student1: Student) => string = (student1: Student): string => {
    const {name, age}= student1;
    return `Welcome my name is ${name} and I am ${age} years old`;
}


console.log(introduction(student1));