let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let arr = input.split(' ');
let count = 0;
for(let i = 0; i < arr.length; i++){
    if(arr[i] !== ''){
        count++;
    }
}
console.log(count);