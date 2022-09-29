//can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/12977

function isPrime(num) {
    for(let i = 2; i * i <= num; i++) {
       if(num % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                if(isPrime(nums[i] + nums[j] + nums[k]) === true) answer++;
            }
        }
    }
    return answer;
}

/*
console.log([1,2,3,4]);
console.log([1,2,7,6,4]);
*/