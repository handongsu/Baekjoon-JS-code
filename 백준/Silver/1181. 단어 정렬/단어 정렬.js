const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let count = Number(input[0]);

//길이 짧은 순
//길이가 같으면 사전 순

let arr = [];
for(let i = 1; i <= count; i++){
    arr.push(input[i]);
}

const newArr = [...new Set(arr)];

newArr.sort((a, b) => {
    if (a.length != b.length) {
        return a.length - b.length;
    } else {
        if (a < b) {
            return -1;
        } else if (a > b) {
            return 1;
        } else {
            return 0;
        }
    }
});


for(let answer of newArr){
    console.log(answer);
}



