// function logAndReturn<T>(value: T): T {
//     return value;
// }

// console.log(logAndReturn<number>(2));
// console.log(logAndReturn<string>('Hello'));
// console.log(logAndReturn<boolean>(true));

// -------------- Extend Keyword ------------------

function logAndReturn<T extends number | string>(val1: T, val2: T): T {
    return (val1 as any) + (val2 as any);
}

// console.log(logAndReturn(2, 3));

// What if I have to send multiple types of arguments? In that case we can use Generics in this way 

function Add<T,U>(val1:T, val2:U, val3: boolean): void{
    console.log(typeof val1);
    console.log(typeof val2);
    console.log(typeof val3);
}

Add<number, string>(1,"radha", true);