//problem at: https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(jinsoo, total, players, turn) {
    let all = 'X';
    let answer = '';
    let start = 0;
    let k = total * players;
    
    while(k--) {
        all += start.toString(jinsoo);
        start++;
    }

    answer += all[turn];
    total -= 1;
    while(total--) {
        turn += players;
        answer += all[turn]
    }

    return answer.replace(/[a-z]/g, (eng) => eng.toUpperCase());
}