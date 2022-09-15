function solution(n) {
    let answer = [],
        arr = [],
        str = n.toString();
    
    arr = str.split('');
    let temp = arr.length;
    
    for (i = 0; i < temp; i++) {
        answer.push(Number(arr.pop()));
    }
    
    return answer;
}

console.log(solution(12345));