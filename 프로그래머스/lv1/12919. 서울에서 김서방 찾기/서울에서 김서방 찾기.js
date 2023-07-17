function solution(seoul) {
    var answer = '';
    let x = 0;
    for(let i = 0; i < seoul.length; i++){
        if(seoul[i] == "Kim"){
            x = i
            break;
        }
    }
    // var find = seoul.indexOf('Kim');
    // answer = `김서방은 ${find}에 있다`
    return "김서방은 " + x + "에 있다";
}