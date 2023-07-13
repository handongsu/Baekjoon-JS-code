function solution(x) {
    var answer = true;
    let num = x.toString().split('');
        let a = 0;
        for(let i = 0; i < num.length; i++){
            a += Number(num[i]);
        }
        if(x % a != 0){
            answer = false;
        }
        return answer;
}