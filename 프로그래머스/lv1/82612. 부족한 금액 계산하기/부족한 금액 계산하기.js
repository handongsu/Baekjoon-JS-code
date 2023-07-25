function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    
    for(let i = 1; i <= count; i++){
        sum += price * i;   //카운트 만큼 가격*카운트 
    }
    if(sum <= money){
         return answer = 0; //부족하지 않으면 0 리턴
    }
    
    answer = sum - money
    
    return answer;
}