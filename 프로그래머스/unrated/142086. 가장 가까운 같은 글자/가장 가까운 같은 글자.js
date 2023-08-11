function solution(s) {
    var answer = [];
    let arr = [];
    let num = 0;
    for(let i = 0; i < s.length; i++){
        if(arr.includes(s[i])){
            num = arr.lastIndexOf(s[i]);
            arr.push(s[i])
            // console.log(arr.lastIndexOf(arr[i]))
            // console.log(num)
            answer.push(arr.lastIndexOf(arr[i]) - num)
            num = 0;
        }else if(!arr.includes(s[i])){
            arr.push(s[i])
            answer.push(-1);
        }      
    }
    return answer;
}

//includes
//현재위치 - push전 lastindexof(arr[i])