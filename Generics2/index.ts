const score: Array<number> = []
const score2: Array<string> = []

function identityOne(val:boolean | number): boolean | number{
    return val;
} 

function identityTwo(val: any): any{
    return val;
}

function identityThree<T>(val:T): T{
    return val;
}
// once you send value of a particular type, it will return the same type of value (inshort the value is locked)

identityThree<string>("radha"); 
identityThree(3);

interface Bottle{
    brand: string,
    quantity: number,
}
identityThree<Bottle>({brand: "Kinley", quantity: 1});
// we can even send our own data type as well 



//---------Generics in Array and Arrow functions in Typescript -------

function getSearchProducts<T>(products: T[]): T{
    // do some database operations  
    return products[3];
}

// this comma shows that this is not a comma but a generics 
const getSearchProducts2 = <T,>(products: T[]):T => {
    return products[2];
}
// this method is showing that it is accepting the array of any type of data and returning the same type of data(returning 1 particular data from the array)



