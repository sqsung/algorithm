// can be found at: https://school.programmers.co.kr/learn/courses/30/lessons/42889


function solution(n, stages) {        
    let count = 0, failRate = 0, x = 0, result = [];

    for(let i = 1; i <= n; i++) {
        for(let j = 0; j < stages.length; j++) {
            if(stages[j] === i) count++;
            if(stages[j] < i) x++;
        }

        failRate = count / (stages.length - x); 
        result.push([i, failRate]);

        count = 0;
        x = 0;
    }

    result.sort((a,b) => b[1] - a[1]);
    let answer = [];
    for(let i = 0; i < result.length; i++) {
        answer.push(result[i][0]);
    }

    return answer;
}


//console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]))