function solution(numbers) {
    var answer = [];
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            answer.push(numbers[i] + numbers[j]); 
        }
    }
    answer.forEach(e => {
    if (!arr.includes(e)) {
        arr.push(e);
    }
});
   
    return arr.sort((a,b) => a - b);
}

//2중for 안에 조건문
// 1. 같은 숫자 제거
// 2. 