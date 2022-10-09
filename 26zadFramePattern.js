let n = 5; 
let square = "";

for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) {
      //if first or last
    if(i === 0 || i === n - 1) {
      square += "*";
    }
    //if in the middle
    else {
        //if not in the middle of the middle
      if(j === 0 || j === n - 1) {
        square += "*";
      }
      //if in THE middle
      else {
        square += " ";
      }
    }
  }
//add line when j ends
  square += "\n";
}

console.log(square);