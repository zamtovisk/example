let start_number = 2;
let finish_number = 20;
let counter = 0;
for(start_number; strat_number < finish_number; start_number++){
  //i is divider for every number. It's there to help the counter
  for(i = 1; i<= start_number; i++){
    if(start_number/i == Math.trunc(start_number/i)){
      counter++;
    }
  }
if(counter > 2 || start_number == 1){
    //print nothing and reset counter
    counter = 0;
}
else{
    console.log(start_number);
    counter = 0;
  }
}
