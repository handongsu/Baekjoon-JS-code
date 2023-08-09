function solution(t, p) {
    var answer = 0;
    let str = '';

    for(let i = 0; i < t.length - p.length + 1; i++){
        //str = t.slice(i, p.length + i); //i가 값이 오르면 last index도 같이 올라야함
        //str = t.substring(i, p.length + i);
        str = t.substring(p.length + i , i);
        //str = t.substr(i, p.length);
        
        if(str <= p){
            answer++;
        }
        //str <= p && answer ++
        
        str = '';
    }
   
    return answer;
}

//  3141592     271     7 - 3 + 1
//314, 141, 415, 159, 592 5개
//한 칸 씩 뒤로

//10203     15
//10 02 20 03  4개

// 123456   11      6 - 2 + 1
// 12 23 34 45 56   5개
    
// 1234567  11      7 - 2 + 1
// 12 23 34 45 56 67  6개

//for 문 처음에 0번째 뽑고 다음 돌 때 그 다음꺼 뽑고,,, 길이고정


//substr(index, 길이)