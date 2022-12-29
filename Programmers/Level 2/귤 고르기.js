// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution (k, tangerines) {
    let answer = 0;
    let obj = {};

    for (let i = 0; i < tangerines.length; i++) {
        if (obj[tangerines[i]]) obj[tangerines[i]]++;
        else obj[tangerines[i]] = 1;
    }

    let occurences = Object.values(obj).sort((a, b) => b - a);
    for (let i = 0; i < occurences.length; i++) {
        answer++;

        if (k > occurences[i]) k -= occurences[i];
        else break;
    }

    return answer;
}

// console.log(solution(6, [1,3,2,5,4,5,2,3]));
// console.log(solution(4, [1,3,2,5,4,5,2,3]));
// console.log(solution(2, [1,1,1,1,2,2,2,3]));