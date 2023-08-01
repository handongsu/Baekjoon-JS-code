function solution(sizes) {
    var answer = 0;
    let num = 0;    //가로 대장
    let num2 = 0;   //세로 대장
    for(let i = 0; i < sizes.length; i++){
        //[0,1,2,3,4]
        for(let j = 0; j < sizes[i].length; j++){
            //[[0,1],[1,1],[2,1],[3,1],[4,1]]
            sizes[i].sort((a,b) => b-a) //안에 숫자 정렬
        }
        //console.log(sizes[i]);
        if(sizes[i][0] > num){
            num = sizes[i][0];
        }
         if(sizes[i][1] > num2){
            num2 = sizes[i][1];
        }
        
    }
    //console.log(sizes);
    answer = num * num2;
    
    
    return answer;
}
    



//가로길이 하나 잡아서 죄다 돌려서 제일 크게
//제일 큰거 하나 잡고 80 
//[50,60],[30,70],[30,60],[40,80]
//나머지 위치중에 가장 큰거 50
//[0][1] 중 큰 숫자를 가로길이로
//[10,7],[12,3],[15,8],[14,7],[15,5]
//15 * 8
//[14,4][19,6][16,6][18,7][11,7]
//19 * 7
//결론은 큰 값 정렬 후 가장 큰 숫자 뽑고 나머지 짝꿍 중 가장 큰 거뽑기
