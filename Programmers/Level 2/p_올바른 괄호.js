function solution(s) {
    let temp = [], answer = true;
    
    if(s.length % 2 !== 0) { return false; } //추가 안하면 런타임 에러 
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            temp.push(s[i]);
        } else if (s[i] === ')') {
            if (temp.length === 0) {
                return false;
                break;
            } else {
                temp.pop(); 
            }
        }
    }
    if (temp.length !== 0) {
        answer = false; 
    } else {
        answer = true;
    }
    return answer;
}
    
    
//console.log(solution('(())(())'));