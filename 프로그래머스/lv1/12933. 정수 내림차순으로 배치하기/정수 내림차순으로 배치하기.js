function solution(n) {
    var answer = 0;
    let str = n.toString().split("");
    // answer = Number(str.sort().reverse().join(''));
    let temp;
    for(let j = 0; j < str.length; j++)
    for (let i = 0; i < str.length; i++) {
      if (str[i] < str[i+1]) {
        temp = str[i];
        str[i] = str[i+1];
        str[i+1] = temp;
        // i = -1;
      }
    }
    answer = Number(str.join(""));  //배열 하나하나 구분하기위한 문자열
    return answer;
}