function solution(n, m) {
    var answer = [];
    let minNum=1, maxNum=1;
    let a = Math.max(n,m);  //둘 중 큰거
    let b = Math.min(n,m);  //둘 중 작은거
    for(let i = 2; i <= b; i++){
        if(n % i === 0 && m % i === 0){
            minNum = i;
        }
        console.log(minNum);    //1 3
    }
    maxNum = a * b / minNum;
    // console.log(maxNum);
    answer.push(minNum);
    answer.push(maxNum);
    return  answer;
}