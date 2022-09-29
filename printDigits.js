function printDigits (num) {
    console.log(num);
    let reversed = 0;
    while (num != 0) {
        let lastDigit = num % 10;
        reversed = reversed * 10 + lastDigit;
        console.log(reversed);
        num = Math.floor(num/10);
        
    }
    return reversed;
}

console.log(printDigits(1234));