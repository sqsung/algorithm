//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    let result = [];

    for(let i = 0; i < dartResult.length; i++) {
        if(/\d/.test(dartResult[i]) === true) {
            if(Number(dartResult[i]) === 0 && /\d/.test(dartResult[i-1]) === true) continue; 
            else if(Number(dartResult[i]) !== 1) result.push(Number(dartResult[i]));
            else if(/\d/.test(dartResult[i + 1]) === false || dartResult[i + 1] != '0') result.push(Number(dartResult[i]));
            else result.push(10);
        } 
        
        if(dartResult[i] === 'D') result[result.length - 1] = result[result.length - 1] ** 2; 
        else if(dartResult[i] === 'T') result[result.length - 1] = result[result.length - 1] ** 3;

        if(dartResult[i] === '*' && result.length === 1) result[0] = result[0] * 2;
        else if(dartResult[i] === '*' && result.length > 1) {
            result[result.length - 1] = result[result.length - 1] * 2;
            result[result.length - 2] = result[result.length - 2] * 2;
        } 
        
        if(dartResult[i] === '#') result[result.length - 1] = result[result.length - 1] * -1;
    }

    return result.reduce((acc, cur) => acc + cur);
}


/* TC 
console.log(solution("1D2S0T"));
console.log(solution("10D10S0D"));
*/ 


