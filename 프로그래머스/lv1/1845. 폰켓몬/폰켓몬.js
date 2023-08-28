function solution(nums) {
    var answer = 0;
    let arr = [];
    arr = nums.filter((a, i) => {
        if(!arr.includes(a)){
            return arr.push(a);
        }
    });
    console.log(arr);
    //길이 조건
    if((nums.length/2) < arr.length){
        return nums.length / 2;
    }else return arr.length;
}

//2중for문 중복 제거  갯수