//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(s) {
    let temp = [], result = [], answer = [], tempStr = '';

    for(let i = 1; i < s.length - 1; i++) {
        if(s[i] === '{' || s[i] === ' ') continue;
        if(s[i] === '}') {
            result.push(temp);
            temp = [];
        }
        if(/\d/.test(s[i]) === true && (s[i + 1] !== ',' || s[i + 1] !== '}')) tempStr += s[i];
        if(/\d/.test(s[i]) === true && (s[i + 1] === ',' || s[i + 1] === '}')) {
            temp.push(tempStr);
            tempStr = '';
        }
    }

    result.sort((a, b) => a.length - b.length);

    for(let i = 0; i < result.length; i++) {
        for(let j = 0; j < result[i].length; j++) {
            if(i === 0) answer.push(Number(result[0][0]));
            else {
                if(answer.includes(Number(result[i][j]))) continue;
                else answer.push(Number(result[i][j]));
            }
        }
    }
    return answer;
}


// console.log(solution("{{20,111},{111}}"));
// console.log(solution("{{123}}"));
// console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}"));
