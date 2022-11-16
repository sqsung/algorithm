function solution(num, total) {
    let org = 0;
    let answer = [];

    for (let i = 1; i <= num; i++) {
        answer.push(i);
        org += i;
    }

    let move = (total - org) / num;
    if (move === 0) return answer;

    answer =[];
    for (let i = 1 + move; i <= num + move; i++) {
        answer.push(i);
    }
    
    return answer;
}
