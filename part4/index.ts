
function isDivisibleByfourAndEight(num: number): boolean{
    if(num % 4 === 0 && num % 8 === 0){
        return true;
    }else{
        return false;
    }
}
// console.log(isDivisibleByfourAndEight(2));

// ---------------------Difference between Unknown and Any----------------------

//********** */ Example of any 
let randomValue: any = "hello";

// No errors, even though these might be incorrect operations
randomValue.toUpperCase(); // Works fine
randomValue = 42;
randomValue.toFixed(2); // No error, even though it’s unpredictable

// Unintended errors may go undetected
randomValue.foo(); // No error in TypeScript, but runtime error since foo doesn't exist


// ******** Example of unknown
let someValue: unknown = "hello";

// Type narrowing or assertion required to perform specific operations
if (typeof someValue === "string") {
  console.log(someValue.toUpperCase()); // Works only because we checked the type
}

someValue = 42;
if (typeof someValue === "number") {
  console.log(someValue.toFixed(2)); // Works fine after type check
}

// Prevents unintended errors, as you can't use properties/methods unless type-checked
// someValue.foo();    // TypeScript error: Property 'foo' does not exist on type 'unknown'