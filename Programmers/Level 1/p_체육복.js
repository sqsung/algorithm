//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    let answer = n - lost.length;

    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    
    for(let i = 0; i < lost.length; i++) {
        for(let j = 0; j < reserve.length; j++) {
            if(lost[i] === reserve[j]) {
                answer++;
                lost.splice(i, 1);
                reserve.splice(j, 1);
            }
        }
    }
    
    let len = lost.length;
    for(let i = 0; i < len; i++) {
        let x = lost[0];
        lost.splice(0, 1);
        for(let j = 0; j < reserve.length; j++) {
            if(x === reserve[j] || reserve[j] + 1 === x || reserve[j] - 1 === x) {
                answer++; 
                reserve.splice(j, 1);
                break;
            }
        }
    }
    return answer;
}

/* TC
console.log(solution(5,	[1, 2, 4], [2, 4, 5]));
console.log(solution(5,	[1, 2, 4], [2, 3, 4, 5]));
*/ 