function solution(s) {
    let answer = '';
    for(let i = 0; i < s.length; i++) {
        if (s.length % 2 !== 0) {
            let index = Math.ceil(s.length / 2);
            answer = s[index -1];
        } else {
            let index = s.length / 2;
            answer = s[index - 1] + s[index];
        }
    }
    
    return answer;
}