function solution(strings, n) {
    var answer = [];
    let arr = [];
    answer = strings.sort((a,b) => {
        a[n] - b[n];
        if(a[n] === b[n]){
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
            return a[i] < b[i] ? -1 : 1;
        }
    }
        }else if(a[n] < b[n]){
            return -1
        }else if(a[n] > b[n]){
            return 1
        }else {
            return 0
        }
        
    });
    console.log(strings)
    
    return answer;
}

//굳이 뽑아서 할 필요가있을까?
//그 sort로 그 인덱스만 비교하면 될거같은데,,?