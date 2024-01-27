let fs = require("fs");
let filePath = process.platform === "linux" ? "/dev/stdin" : "test.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let [N, M] = input[0].split(" ").map(Number);
let arr = [];

for(let i = 1; i <= N; i++){
    arr.push(i);
}

for (let i = 1; i <= M; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  let tmp = arr[x - 1];
  arr[x - 1] = arr[y - 1];
  arr[y - 1] = tmp;
}

console.log(arr.join(" "));