let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let num = '';

for(let i = 0; i < (input[0] / 4); i++){
    num += 'long ';
    
}
console.log(num + 'int');