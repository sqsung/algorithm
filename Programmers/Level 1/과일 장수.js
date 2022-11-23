//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
    let sales = 0;
    let rounds = Math.floor(score.length / m);
    let idx = m;

    score.sort((a, b) => b - a);
    score.unshift(0);

    while (rounds--) {   
        sales += score[idx] * m;
        idx += m;
    }
    
    return sales;
}

// console.log(solution(3, 4, [1, 2, 3, 1, 2, 3, 1]));
// console.log(solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]));