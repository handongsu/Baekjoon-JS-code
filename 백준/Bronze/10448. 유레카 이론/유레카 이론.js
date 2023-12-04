const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = Number(input[0]);
let nums = input.slice(1,);

let list=[]; //k의 최댓값은 1000이니 1000까지의 모든 삼각수를 구해 tri_list[]에 담기
for(let i = 1; i < 45; i++){
    list.push(i * (i + 1) / 2)
}

let result;

for(let x of nums){        //입력값 중 하나씩 뽑기
    result = 0;
    for(let a of list){
        for(let b of list){
            for(let c of list){
                if((a+b+c) === Number(x)){
                    result = 1;
                }
            }
        }
    }
    console.log(result);
}