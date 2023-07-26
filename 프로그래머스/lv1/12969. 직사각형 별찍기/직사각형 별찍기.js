process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { //data = 5 3
    const n = data.split(" "); // ['5', '3']
    const a = Number(n[0]), b = Number(n[1]);   // a = 5 , b = 3
    
    let str = "";
    for(let i =0; i < b; i++){
        str = "";   //한바퀴 돌고 다음줄 초기화
        for(let j = 0; j < a; j++){
            str = str + '*';
        }
        console.log(str);   //한줄씩 출력
    }
    
});