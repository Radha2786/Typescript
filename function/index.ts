
const isPallin = (val:string): boolean =>{
    for(let i=0;i<val.length;i++){
        if(val[i] !== val[val.length-i-1]){
            return false;
        }
    }
    return true;
}

let ans: boolean = isPallin("12133");
console.log(ans);