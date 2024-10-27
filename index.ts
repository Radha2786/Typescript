console.log("01 basics of Typescript");

// let num: number = 20;


// console.log(num);

// let a: number = 10;
// let b: number = 20;
// console.log("sum is",a + b);

// will return number 
function sum(a:number,b:number):number{
    return a+b;
}

// console.log(sum(2,"radha"));   // tsc command will not let create index.js file because of type error
console.log(sum(2,1));  //tsc command will let create index.js file because of no type error

// type script help you to find error on development pahse and help you to sort out like the example where you can not pass the argument string on number type paramenter is'nt great. but remember if you compiloe it create those js file even that  so you need a type configurarion file to
//  avoid that  for that run the command  tsc ---init and this will create the file okay but you need  to uncomment the noEmitOnError code from typeconfiguration file to true but if it not work  just run the code tsc --noEmitOnError  and the file their  on command prompt. 
