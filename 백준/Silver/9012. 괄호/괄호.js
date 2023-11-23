const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const caseCount = Number(input[0]);

for(let i = 1; i <= caseCount; i++){
    let stack = [];
    let result = 'YES';
    const cases = input[i];
    
    for(let j = 0; j < cases.length; j++){
        if(cases[j] === '('){
            stack.push(cases[j]);
        } else {
            if(stack.length === 0){
                result = 'NO';
            }
            stack.pop();
        }
    }if(stack.length > 0){
    result = 'NO';
}
    console.log(result);
}

