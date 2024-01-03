const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let count = 0;
let stack = [];

for(let i = 0; i < input.length; i++){
    if(input[i] === '('){
        stack.push(input[i]);
    } else {
        stack.pop();
        if(input[i - 1] === '('){
            count += stack.length;
        } else{
            count++;
        }
    }
}
console.log(count);