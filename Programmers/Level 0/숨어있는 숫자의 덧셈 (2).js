const solution = str => {
    let temp = '',
        answer = 0;
    
    for(let i = 0; i < str.length; i++) {
        if(isNaN(str[i])) {
            answer += Number(temp);
            temp = '';
        } else if (!isNaN(str[i])) {
            temp += str[i];
        }
    }
    temp.length > 0 ? answer += Number(temp) : answer; 
    return answer;
}

console.log(solution("aAb1B2cC34oOp"));
