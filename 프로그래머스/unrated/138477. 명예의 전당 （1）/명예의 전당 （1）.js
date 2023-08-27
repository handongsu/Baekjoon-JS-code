function solution(k, score) {
    var answer = [];
    let result = [];
    
    score.forEach((a,i) => {
        if(i < k){
            answer.push(score[i]);
        }
        if(a > Math.min(...answer)){
            answer.pop();
            answer.push(a);
        }
        answer.sort((a,b) => b - a);
        result.push(Math.min(...answer));
    })
    
    
   return result;
}

//