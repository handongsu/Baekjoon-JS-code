function solution(s) {
    var answer = 0;
    s = s.replaceAll(/zero/g, 0);
    s = s.replaceAll(/one/g, 1);
    s = s.replaceAll(/two/g, 2);
    s = s.replaceAll(/three/g, 3);
    s = s.replaceAll(/four/g, 4);
    s = s.replaceAll(/five/g, 5);
    s = s.replaceAll(/six/g, 6);
    s = s.replaceAll(/seven/g, 7);
    s = s.replaceAll(/eight/g, 8);
    s = s.replaceAll(/nine/g, 9);
    
    return Number(s);
}

//문자 -> 숫자로,,, replace
//