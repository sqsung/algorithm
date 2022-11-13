function solution(s) {
    s = s.split(' '); 
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'Z') stack.pop();
        else stack.push(Number(s[i]));
    }
    
    return stack.length === 0 ? 0 : stack.reduce((a,c) => a+c);
}

// console.log(solution('1 1 Z Z'));