function solution(n) {
    var answer = 1;
    
    for(let i=2; i<=n; i++){
        if(n%i == 0){
            answer += i;
        }
    }
    if(n < 2){
        return n;
    }
    return answer;
}