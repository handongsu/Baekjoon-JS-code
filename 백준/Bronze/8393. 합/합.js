let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num = 0;

for(let i = 1; i <= input[0]; i++){
    num += i
}
console.log(num)