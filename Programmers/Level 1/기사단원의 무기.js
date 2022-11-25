//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/136798

function getDivisorOf(n) {
    let divideBy = 1;
    let divisorCnt = 0;

    while (divideBy <= Math.sqrt(n)) {
        if (n % divideBy === 0) {
            divisorCnt++;
            if (n / divideBy !== divideBy) divisorCnt++;
        }
        divideBy++;
    }
    return divisorCnt;
}

function solution(number, limit, power) {
    const divisorArr = [];
    const knightsArr = [...Array(number + 1).keys()];
    knightsArr.shift();

    for (let i = 0; i < knightsArr.length; i++) {
        if (getDivisorOf(knightsArr[i]) <= limit) divisorArr.push(getDivisorOf(knightsArr[i]));
        else divisorArr.push(power);
    }

    return divisorArr.reduce((acc, cur) => acc + cur);
}

console.log(solution(5, 3, 2));
