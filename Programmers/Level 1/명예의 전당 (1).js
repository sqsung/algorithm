//problem at : https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
    let 명예의전당 = [];
    let 안타깝게꼴찌시네요 = [];

    for (let i = 0; i < score.length; i++) {
        명예의전당.push(score[i]);

        if (명예의전당.length) 명예의전당.sort((a,b) => b - a);
        if (명예의전당.length > k) 명예의전당.pop();
        
        안타깝게꼴찌시네요.push(명예의전당[명예의전당.length - 1]);
    }

    return 안타깝게꼴찌시네요;  
}

console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]));
