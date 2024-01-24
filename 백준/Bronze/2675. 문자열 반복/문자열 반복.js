const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

const number = input[0]; 
let result ='';

for (let i = 1; i <= number; i++) {
    const items = input[i].split(' ');  // items = ['3', 'ABC']
    const times = Number(items[0]); // 3
    const item = items[1].split(''); // ['A','B','C']    
    result = '';

    for (let j = 0; j < item.length; j++) {
        result += item[j].repeat(times);
    }
    console.log(result);
}