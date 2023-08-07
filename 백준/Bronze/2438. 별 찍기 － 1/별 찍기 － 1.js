let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
let star = '';
for(let i = 1; i <= input[0]; i++){
    star += '*'
    console.log(star);
}