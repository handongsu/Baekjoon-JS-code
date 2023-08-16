function solution(food) {
    var answer = '';
    let arr = [0];

    for(let i = food.length; i >= 1; i--){   //안쪽부터 채워야 함
        let num = Math.floor(food[i] / 2);
        
        for(let j = 0; j < num; j++){
           arr.unshift(i);  //앞쪽
            arr.push(i);    //뒤쪽
        }
    }
    console.log(arr)
    answer = arr.join('');
    return answer;
}



//122333 + reverse 
//11133 + reverse
//[]