function solution(s) { 
    let visited = [];
    let result = [];

    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (visited.includes(el)) {
            result.push(i - visited.lastIndexOf(el));
            visited.push(el);
        } else {
            result.push(-1);
            visited.push(el);
        }
    }
    return result;
}

// console.log(solution('banana'));
// console.log(solution('foobar'));