function solution(n, arr1, arr2) {
    var answer = [];
    let str1 = [];
    let str2 = [];
    for(let i = 0; i < n; i++){
        str1.push(arr1[i] | arr2[i]);
    }
    for(let x of str1){
        str2.push(x.toString(2));
    }
  
    for(let y of str2){
        answer.push(y.replaceAll(/1/g , '#').replaceAll(/0/g , ' ').padStart(n , ' '));
    }
       
    return answer;
}

//[01001 , 10100 , 11100 , 10010 , 01011]
//[11110 , 00001 , 10101 , 10001 , 11100]
//[11111 , 10101 , 11101 , 10011 , 11111]
