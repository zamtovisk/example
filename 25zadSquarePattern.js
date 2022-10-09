let n = 5; 
let square = "";

for(let i = 0; i < n; i++) {
  for(let j = 0; j < n; j++){ 
    square += "*";
  }
  square += "\n";
}
console.log(square);