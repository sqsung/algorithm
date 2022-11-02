//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/92335

function isPrime(num) {
    if(num === 1 || num === 0) return false;

    for(let i = 2; i * i <= num; i++) {
       if(num % i === 0) return false;
    } 

    return true;
}

function solution(n, k) {
    let test = '',
        count = 0,
        arr = [],
        num = n.toString(k);

    for(let i = 0; i < num.length; i++) {
        if(num[i] === '0' && test.length > 0) {
            arr.push(Number(test));
            test = '';
        } else test += num[i];
    }

    if(test.length > 0) arr.push(Number(test));

    for(let i = 0; i < arr.length; i++) {
        if(isPrime(arr[i]) === true) count++;
    }

    return count;
}

// console.log(solution(437674, 3));
// console.log(solution(2, 3));