function solution(absolutes, signs) {
    // var answer = 123456789;
    let num = 0;
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === true){
            num += absolutes[i]
        }else {
            num -= absolutes[i]
        }
    }
    return num;
}