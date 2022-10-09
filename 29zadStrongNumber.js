let reminder = 0;    
let n = 145;
let sum = 0;   
let tmp = n;
  
while (n != 0){
//tuka go smalqva
    reminder = n % 10;
    //tuka otiva dolu vuv funciqta
    sum = sum + factorial(reminder);
    n = Math.floor(n / 10);
}
//tuka proverqva sumata 
if (sum == tmp){
    console.log(tmp + " is a strong number");
}
else{
    console.log(tmp + " is not a strong number");
}
                 
function factorial(n){
    let fact = 1;
    for (let i = 2; i <= n; i++)
        fact = fact * i;
  
    return fact;
}
