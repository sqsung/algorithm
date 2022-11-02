function solution(b, a) {
    let sortedB = b.split('').sort().join('');
    let sortedA = a.split('').sort().join('');
    
    return sortedB === sortedA ? 1:0;
}

console.log(solution("olleh", "hello"))
    