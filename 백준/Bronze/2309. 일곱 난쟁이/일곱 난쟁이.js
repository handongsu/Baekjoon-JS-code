const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let arr = input.sort((a, b) => a - b);
let sum = 0;
let minusSum = 0;
let answer;

for (let x of arr) {
    sum += x;
}

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        minusSum = arr[i] + arr[j];

        if ((sum - minusSum) === 100) {
            answer = arr.filter((ar) => ar !== arr[i] && ar !== arr[j]);
            break;
        }
    }
    if (answer) {
        break;
    }
}
console.log(answer.sort((a, b) => a - b).join("\n"));