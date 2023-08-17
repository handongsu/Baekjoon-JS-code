function solution(before, after) {
   let str = before.split('').sort().join('');
   let str2 = after.split('').sort().join('');
    console.log(str);
    console.log(str2);
    return str === str2 ? 1 : 0;
    

}