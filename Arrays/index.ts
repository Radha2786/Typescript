function CalculateAverage(arr: number[]):number{
    let avg=0;
    avg = arr.reduce(SumOfArr)/ arr.length;
    return avg;
}

function SumOfArr(total: number,curr: number):number{
   return total+=curr;
}

// console.log(CalculateAverage([1,2,3,4,5]));

const products:{
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

console.log(products.category.name);