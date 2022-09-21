function solution(s) {
    let answer = '',
        evenOdd = 2; 
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
            evenOdd = 2;
        } else if (s[i - 1] === ' ' || i === 0) {
            answer += s[i].toUpperCase();
        } else {
            if (evenOdd % 2 === 0) {
                answer += s[i].toLowerCase();
                evenOdd++; 
            } else if (evenOdd%2 !== 0) {
                answer += s[i].toUpperCase();   
                evenOdd++;
            }
        }
    }                
    return answer;   
}

/*
console.log(solution("try hello world"));
console.log(solution("lol is  this working"));
console.log(solution("tEst Case"));
*/