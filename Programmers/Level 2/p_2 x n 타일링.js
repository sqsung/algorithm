// problem at: https://school.programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
    let initialArr = [1, 2];
    
    if(n < 2) return initialArr[n - 1];
    else for(let i = 2; i <= n; i++) {
        initialArr.push((initialArr[i - 1] + initialArr[i - 2]) % 1000000007);
    }
    return initialArr[n - 1];
}
