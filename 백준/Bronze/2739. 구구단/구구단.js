var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
const num = Number(input);

for(let i = 1; i <= 9; i++){
    console.log(num, "*", i, "=", num*i); 
}