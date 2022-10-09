let n = 5;
let pyramid = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    pyramid += "$";
  }
  pyramid += "\n";
}
console.log(pyramid);