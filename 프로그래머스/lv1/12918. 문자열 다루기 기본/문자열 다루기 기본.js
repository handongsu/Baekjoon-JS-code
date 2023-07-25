function solution(s) {
    let num = parseInt(s);  //숫자로 변환 문자는 빠짐
    
    if(s.length == 4 || s.length == 6){
        if(num == s){ // ===은 안됨
            return answer = true;
        }else{
            return answer = false;
        }
}else {
    return answer = false;
}
    return answer;
}