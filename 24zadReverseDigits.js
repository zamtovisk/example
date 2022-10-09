let reversed = 0;
let n = 123456;
let lastDigit = 0;

while(n != 0){
    lastDigit = n % 10;
reversed =reversed * 10 + lastDigit;
    n = Math.floor(n/10);
}

console.log(reversed);