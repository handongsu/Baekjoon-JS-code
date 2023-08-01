function solution(d, budget) {
    var answer = 0;
    let str = d.sort((a,b)=> a-b);
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        sum += str[i]; // 1, 1+2, 1+2+3, 1+2+3+4
        if(sum <= budget)
        {
            answer++;
        }
        
    }
    return answer;
}