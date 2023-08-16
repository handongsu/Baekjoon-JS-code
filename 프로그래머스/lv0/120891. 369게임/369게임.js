function solution(order) {
    var answer = 0;
    let str = order.toString().split('');
    for(let x of str){
        if(x == 3 || x == 6 || x==9){
            answer++;
        }
    }
    return answer;
}