function isDivisibleByfourAndEight(num) {
    if (num % 4 === 0 && num % 8 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisibleByfourAndEight(2));
