function solution (str, x, y) {
    let answer = '';
    
    for(let i = 0; i < str.length; i++) {
        if(i === x) answer += str[y];
        else if(i === y) answer += str[x];
        else answer += str[i];
    }
    
    return answer;
}