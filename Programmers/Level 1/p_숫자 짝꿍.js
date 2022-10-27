//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(x, y) {
    let answer = '';
    
    x = x.split('');
    y = y.split('');
  
    for (let i = 0; i <= 9; i++) {
        let xCount = x.filter((str) => Number(str) === i).length;
        let yCount = y.filter((str) => Number(str) === i).length;

        answer += i.toString().repeat(Math.min(xCount, yCount));
    }

    if(answer.length === 0) return '-1';

    let zeroCheck = answer
    if(zeroCheck.split('').filter(num => Number(num) !== 0).length === 0) return '0';
    else return answer.split('').map(str => Number(str)).sort((a, b) => b - a).join('');
}

console.log(solution('12321', '43251'));
console.log(solution("5525","1255"));
console.log(solution("100", "203045"));

// ----- time limit exceeded -----
// function solution(x,y) {
//     let answer = [];
//     let x1 = x.split('')
//     let y1 = y.split('')

//     for(let i = 0; i < 10; i++) {
//         let str = i.toString();
//         if(x1.includes(str) && y1.includes(str)) {
//             answer.push(str);
//             x1.splice(x1.indexOf(str), 1);
//             y1.splice(y1.indexOf(str), 1);
//             i--;
//             if(x1.length === 1 && y1.length === 1) break;
//         }
//     }
//     if(answer.length === 0) return "-1";
    
//     let zeroCheck = answer; 
//     if (zeroCheck.reduce((a,c) => Number(a)+Number(c)) === 0) return '0';
    
//     return answer.sort((a,b) => b - a).join('');
// }






/*  ----- time limit exceeded -----
function solution(x, y) {
    let answer = [];
    let x1 = x.split('')
    let y1 = y.split('')
    
    for(let i = 0; i < x1.length; i++) {
        for(let j = 0; j < y1.length; j++) {
            if(x1[i] === y1[j]) {
                answer.push(x1[i]);
                x1.splice(i, 1);
                y1.splice(j, 1);
                i--;
                j--;
                break;
            }
        }
    }
    if(answer.length === 0) return "-1";
    
    let zeroCheck = answer; 
    console.log(`1 zC : ${zeroCheck}`)
    if (zeroCheck.reduce((a,c) => Number(a) + Number(c)) === 0) return '0';
    
    return answer.sort((a,b) => b - a).join('');
}
*/