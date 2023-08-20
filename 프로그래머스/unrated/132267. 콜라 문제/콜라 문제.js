function solution(a, b, n) {
    var answer = 0;
    let num = 0;
    while(n >= a){
        num += Math.floor(n/a)*b;
        n = Math.floor(n/a)*b + n % a;
        }
    
    return num;
}
// 20/2 = 10
// 10/2 = 5 
// 5/2 = 2 나머지 1
// 3/2 = 1  나머지 1
//1+1/2 = 1

// 18 / 3 = 6   나머지 1 
// 7 / 3 = 2    나머지 1
// 3 / 3 = 1

//안나누어 떨어지면 나누어 떨어지는 숫자를 만들어주고 남은거 저장했다가 다음 나누어떨어지는 숫자 만들어줄때 사용