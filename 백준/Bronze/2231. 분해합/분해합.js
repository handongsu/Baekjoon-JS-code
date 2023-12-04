//1~입력값 까지 for문 하고 i+(본인의 자리수 숫자 합) === 입력값 이 맞는지 맞으면 i출력

const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString();

const N = Number(input);
let M = 0;

for(let i = 0; i < N; i++){
    let sum = 0;
    const value = i;
    const strValue = value.toString();
    
    for(let j = 0; j < strValue.length; j++){
        sum += parseInt(strValue[j]);
    }
    sum += value;
    
    if(sum == N){
        M = value
        break;
    }
}
console.log(M);