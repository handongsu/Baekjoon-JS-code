let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
const [N, K] = input[0].split(" ").map(c => Number(c));;
const nums = input[1].split(" ").map(c => Number(c));

nums.sort((a, b)=> a - b);

console.log(nums[K-1]);
