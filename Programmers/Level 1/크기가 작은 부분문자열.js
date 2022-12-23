// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution (t, p) {
    let len  = p.length; 
    let array = [];
    
    for (let i = 0; i < t.length - len + 1; i++) {
        let el = '';
        let cnt = len; 
        let idx = i;

        while(cnt--) el += t[idx++];
        array.push(el);
    }

    let numP = Number(p);
    let answer = array.map(val => +val).filter(num => num <= numP).length;
    return answer;
}

// console.log(solution('3141592', '271'));