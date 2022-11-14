function solution(num) {
    let n = 0;
    for(let i = 1; i <= num; i++) {
        n++;
        while (n.toString().split('').includes('3') || n % 3 === 0) {
            n++;
        }
    }
    return n;    
}

// console.log(solution(40));