// problem at : https://school.programmers.co.kr/learn/courses/30/lessons/12913

function solution(land) {
    for (let i = 1; i < land.length; i++) {
        let cur = land[i];
        let prev = land[i - 1];

        cur[0] += Math.max(prev[1], prev[2], prev[3]);
        cur[1] += Math.max(prev[0], prev[2], prev[3]);
        cur[2] += Math.max(prev[0], prev[1], prev[3]);
        cur[3] += Math.max(prev[0], prev[1], prev[2]);
    }

    return Math.max(...land[land.length - 1]);
}

// console.log(solution(
//     [
//         [4, 3, 2, 1],
//         [2, 2, 2, 1],
//         [6, 6, 6, 4],
//         [8, 7, 6, 5]
//     ]
// ));

// console.log(solution(
//     [
//         [1, 2, 3, 5],
//         [5, 6, 7, 8],
//         [4, 3, 2, 1]
//     ]
// ));