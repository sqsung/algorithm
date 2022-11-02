//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/12921

function isPrime(num) {
    for(let i = 2; i * i <= num; i++) {
       if(num % i === 0) {
          return false;
       }
    }
    return true;
}

function solution(n) {
    let count = 0;

    for(let i = 2; i <= n; i++) {
        if(isPrime(i)) count++; 
    }
    return count;
}

//console.log(solution(1000));

/* 맞지만 효율성 낮음 
function solution(n) {
    let count = 0, answer = 0;

    for(let i = 2; i <= n; i++) {
        for(let j = 1; j <= i; j++) {
            if(i % j === 0) count++; 
        }
        count === 2 ? answer++ : answer += 0;
        count = 0; 
    }
    return answer;
}
*/