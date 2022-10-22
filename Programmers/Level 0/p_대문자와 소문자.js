function solution(str) {
    let answer = [];
    
    for(let i = 0; i < str.length; i++) {
        str[i] === str[i].toLowerCase() ? answer.push(str[i].toUpperCase()) : answer.push(str[i].toLowerCase());   
    }
    
    return answer.join('');
}