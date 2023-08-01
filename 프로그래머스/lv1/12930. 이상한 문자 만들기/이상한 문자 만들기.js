function solution(s) {
    var answer = '';
    var arr = [];
    let str = s.split(' '); // ..?
    console.log(str);
    for(let i = 0; i < str.length; i++){    // 3번
        for(let j = 0; j < str[i].length; j++){ //문자갯수
        if(j % 2 === 0){
            arr.push(str[i][j].toUpperCase());
        }else{
            arr.push(str[i][j].toLowerCase());
        }
    }
         if(i < (str.length - 1)){
             arr.push(' ');
         }
    }
    answer = arr.join('');
    
    return answer;
}