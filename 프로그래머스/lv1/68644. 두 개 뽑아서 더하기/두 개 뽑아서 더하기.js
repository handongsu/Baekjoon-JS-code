function solution(numbers) {
    var answer = [];
    let arr = [];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            arr.push(numbers[i] + numbers[j]); 
        }
    }
    arr.forEach(e => {
    if (!answer.includes(e)) {
        answer.push(e);
    }
});
   
    return answer.sort((a,b) => a - b);
}

//2중for 안에 조건문
// 1. 같은 숫자 제거
// 2. 