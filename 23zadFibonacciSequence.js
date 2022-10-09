let n1 = 0;
let n2 = 1;
let nextDigit = 0;

for (let i = 1; i <= 6; i++) {
    //first display zero 0+0=0
    console.log(n1);
    //than the next should be 0+1=1 which is by default
    nextDigit = n1 + n2;
    //than we update the numbers and continue
    n1 = n2;
    n2 = nextDigit;
}