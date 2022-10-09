let reminder = 0;    
let sum = 0;
for (n = 1; n <= 10; n++) {
    while (n != 0){
//tuka go smalqva
    reminder = n % 10;
    //tuka otiva dolu vuv funciqta
    sum = sum + factorial(reminder);
    break;
    }
   
//tuka proverqva sumata 
if (sum == n ){
    console.log(n + " is a strong number");
    sum = 0;
}

else{
    console.log(n + " is not a strong number");
    sum = 0;
}
         
function factorial(n){
    let fact = 1;
    for (let i = 2; i <= n; i++)
        fact = fact * i;
  
    return fact;   
    }
}
