let number = 8;
let counter = 0;
for(i= 1; i < number; i++){
  if(number/i == Math.trunc(number/i)){
    counter++;
  }
}
if(counter > 2 || number == 1){
  console.log('not prime');
}
else{
  console.log('prime');
}
//if a number can be divided by more than 2 numbers (for prime --> 1 and the number itself), it's not a prime number.
//1 can only be divided by one number, 1 itself, so with this definition 1 is not a prime number.
