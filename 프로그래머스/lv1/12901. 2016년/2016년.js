function solution(a, b) {
    var answer = '';
    const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    let date = new Date(`2016-${a}-${b}`);
    let date2 = date.getDay();//요일 0~6
    console.log(date)
     console.log(date2)
    return days[date2];
}