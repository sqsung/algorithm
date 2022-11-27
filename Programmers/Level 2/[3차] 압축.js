function solution(msg) {
    let answer = [];
    let next = '';
    let lastIdx = 27;
    let code = {A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13,
                N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26 };

    let s = msg.split("").reduce((acc, cur) => {
       next = acc + cur;

       if (code[next] === undefined) code[next] = lastIdx++;
       else return acc + cur;

       if (code[acc] !== undefined) answer.push(code[acc]);
       return cur;
   });
   
   answer.push(code[s]);
   return answer;
}

console.log(solution('KAKAO'));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
console.log(solution('ABABABABABABABAB')); 
console.log(solution('A')); 


// Wrong submission: to be refactored
/*
function solution(msg) {
    const code = ['X','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    const answer = [];

    for (let i = 0; i < msg.length; i++) {
        let W = msg[i];
        let nextIdx = i + 1;
        let count = 0;
        
        while (code.includes(W + msg[nextIdx])) {
            W += msg[nextIdx];
            nextIdx++;
            count++;
        }
        answer.push(code.indexOf(W));

        let newCode = W;
        while(code.includes(newCode)) {
            if (msg[nextIdx] === undefined) break;
            newCode += msg[nextIdx];
            nextIdx++;
        }
        code.includes(newCode) ? code : code.push(newCode);

        // console.log(`W -> ${W}`)
        // console.log(`newly added : ${code[code.length - 1]}`);
        // console.log(`-------------`);
        i += count;
    }
    return answer;
}

console.log(solution('KAKAO'));
console.log(solution('TOBEORNOTTOBEORTOBEORNOT'));
console.log(solution('ABABABABABABABAB')); 
console.log(solution('AAAAAA')); 
*/