function solution(name, yearning, photo) {
    var answer = [];
    const map1 = new Map();
    for(let i = 0; i < name.length; i++){
        map1.set(name[i], yearning[i]);
    }
    
    console.log(map1)
    
     photo.map(a => {
         answer.push(a.reduce((b,c) => {
             if(map1.get(c) > 0){
                 return b + map1.get(c);
             }else{
                 return b;
             }
         },0))
         console.log(answer)
     })
    return answer;
}

//yearning[i]는 i번째 사람의 점수
