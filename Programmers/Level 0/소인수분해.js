function solution(n) {
    let prime = [];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            prime.push(i);
            n /= i;
        }
    }
    
    if(n >= 2) prime.push(n);
    
    let answer = [...new Set(prime)]
    return answer.sort((a,b) => a - b);
}