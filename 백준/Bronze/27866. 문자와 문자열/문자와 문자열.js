const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const arr = input[0].toString('');
const num = Number(input[1]);

console.log(arr[num-1]);