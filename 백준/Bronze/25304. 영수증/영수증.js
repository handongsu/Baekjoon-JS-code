let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let price = parseInt(input[0]);
let count = parseInt(input[1]);
let sum = 0;

for(let i = 2; i < count + 2; i++){
    let data = input[i].split(' ');
    sum += (data[0] * data[1]);
}
if(sum === price){
    console.log("Yes");
}else console.log("No");