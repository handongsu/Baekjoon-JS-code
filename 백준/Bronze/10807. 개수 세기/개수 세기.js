const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const number = Number(input[0]);
const arr = input[1].split(' ');
const v = input[2];

let answer = arr.filter((x) => v === x).length;
console.log(answer);