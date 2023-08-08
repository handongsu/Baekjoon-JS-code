function solution(s, n) {
    var answer = '';
    let arr = [];
    
     for(let x of s){  
        arr.push(x.charCodeAt(0))   //문자 -> 숫자 아스키코드 변환
    }
    console.log(arr)
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 32){
            arr[i] = 32;
        }else {
            if(arr[i] <= 90){
                arr[i] += n;
                if(arr[i] > 90){
                    arr[i] -= 26;
                }
            }else if(arr[i] <= 122){
                arr[i] += n;
                if(arr[i] > 122){
                    arr[i] -= 26;
                }
            }
        } 
    }
    
    for(let y of arr){
        answer += String.fromCharCode(y);
    }
    
    return answer;
}
