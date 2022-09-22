function solution(s, n) {
    let answer = '',
        lower = "abcdefghijklmnopqrstuvwxyz",
        upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            answer += ' ';
            continue;
        }

        let index = 0;
        if (upper.includes(s[i])) {
            index = upper.indexOf(s[i]) + n;
            if (index > 25) { index -= 26; }
            answer += upper[index];
        }

        if(lower.includes(s[i])) {
            index = lower.indexOf(s[i]) + n; 
            if (index > 25) { index -= 26; }
            answer += lower[index];
        }
    }

    return answer;
}

//console.log(solution("AZA a b", 1))