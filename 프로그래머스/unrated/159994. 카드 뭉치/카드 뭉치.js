function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    goal.forEach((a,i) => {
        if(cards1[0] === a){
            cards1.shift();
        }else if(cards2[0] === a){
            cards2.shift();
        }else{
            return answer = "No";
        }
    });
    
    return answer;
}

//앞에꺼가 안빠져나가면 뒤에꺼 안됨
//shift 
//goal index 순서대로 요소 비교 - cards1 먼저 비교 후 없으면 card2 비교
// yes or no