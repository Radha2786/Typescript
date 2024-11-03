const person:{
    name:string;
    price:number;
    quantity:number;
    category:{
        name:string;
        type:string;
    }
}={
    name:"diamond ring",
    price: 900000,
    quantity:2,
    category:{
        name:"jwellery",
        type:"gold"
    }
}

// suppose we have to create another object or product with same details there again we have to 
// repeat the whole code of defining types of same properties so in order to prevent that Type ALiases comes into picture 