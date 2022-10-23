//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
    let answer = 0, leftover = parseInt(n/a) * b;

    while(true) {
        leftover = n - (parseInt(n / a) * a) + (parseInt(n/a) * b);
        answer += parseInt(n/a) * b;

        if(leftover < a) break;
        else n = leftover;
    }

    return answer;
}

console.log(solution(3, 2, 20));

