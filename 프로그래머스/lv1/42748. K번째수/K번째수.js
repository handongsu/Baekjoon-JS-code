function solution(array, commands) {
    var answer = [];
    let arr = [];
    for(let i = 0; i < commands.length; i++){
        arr.push(array.slice(commands[i][0]-1,commands[i][1]).sort((a,b)=>{
            return a - b;
        }));
        console.log(arr)
        answer.push(arr[i][commands[i][2]-1])
    }
    
    return answer;
}


// slice(commands[i][0],commands[i][1]).sort()
//answer.push배열[k-1]