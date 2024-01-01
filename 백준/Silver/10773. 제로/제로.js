let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);
const arr =  [];

for (let i = 1; i <= count; i++) {
  const value = Number(input[i]);

  if (value === 0) {
    arr.pop();
  } else {
    arr.push(value);
  }
}

let result = 0;

for(let x of arr){
    result += x;
}

console.log(result);