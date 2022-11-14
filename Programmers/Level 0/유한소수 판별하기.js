function div(n) {
    let prime = [];
    let nums = [2, 5];

    for (let i = 2; i <= Math.sqrt(n); i++) {
        while (n % i === 0) {
            prime.push(i);
            n /= i;
        }
    }
    
    if(n >= 2) prime.push(n);

    let answer = [...new Set(prime)].filter(num => !nums.includes(num));
    return answer.length === 0 ? true : false;
}

function solution(a, b) {
    let factor = 0;

    for (let i = 1; i <= a; i++) {
        if (a % i === 0 && b % i === 0) factor = i;
    } 

    a /= factor; 
    b /= factor; 

    return div(b) === false ? 2 : 1;
}


console.log(solution(11, 22));