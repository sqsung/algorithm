//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
    let count = 0;

    for(let i = 0; i < number.length; i++) {
        for(let j = i + 1; j < number.length; j++) {
            for(let k = j + 1; k < number.length; k++) {
                let sum = number[i] + number[j]
                if(sum + number[k] === 0) count++;
            }
        }
    }
    return count;
}

/* TC
console.log(solution([-2, 3, 0, 2, -5]));
console.log(solution([-3, -2, -1, 0, 1, 2, 3]));
*/ 