let fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

input[0] = input[0].split(" ");
const cards = input[1].split(" ").map((element) => Number(element));
const count = Number(input[0][0]); // N은 총 카드의 개수
const number = Number(input[0][1]); // M은 3개의 숫자의 합과 가장 가까운 목표 값
let answer = 0;

for(let i = 0; i < count; i++){
   for(let j = i+1; j < count; j++){
      for(let k = j+1; k < count; k++){
         const sum = cards[i] + cards[j] + cards[k];
         const gap = number - sum;
         if(gap >= 0 && answer <= sum){
            answer = sum;
         }
      }
   }
}
console.log(answer);

