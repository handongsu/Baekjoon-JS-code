function solution(k, m, score) {
    var answer = 0;
    let arr = [];
    let a = 0;
    score.sort((a,b) => b - a);
    console.log(score)
    for(let i = 0; i < parseInt(score.length/m); i++){ //4번
        
        arr = [];
        for(let j = 0; j < m; j++){ //3번
        arr.push(score[a]); // 0~ 11
            a++;
    }
    answer += Math.min(...arr) * m;
}
    
    return answer;
}

//낮은점수(p) * 갯수(m) = 한 상자의 가격
// 4 4 4 12
// 4 4 4 12
// 2 2 2 6
// 1 1 2 3
// score를 m씩 나눈다. 큰놈 먼저 
// 각각의 배열의 값을 구하고 더하기