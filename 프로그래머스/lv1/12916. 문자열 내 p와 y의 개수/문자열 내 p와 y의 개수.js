function solution(s){
    let str = s.toLowerCase();
    let count = 0;
    let count2 = 0;
    for(let i = 0; i < s.length; i++){
        if(str[i] === "p") count++;
        else if(str[i] ==="y") count2++;
    }
    if(count === count2){
        return true;
    }else if(count !== count2){
        return false;
    }
    
   
    console.log('Hello Javascript')

    return answer;
}