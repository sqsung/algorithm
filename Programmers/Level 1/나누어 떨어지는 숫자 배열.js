function solution(arr, divisor) {
    let answer = arr.filter(element => element % divisor == 0); 
    answer.length == 0 ? answer.push(-1) : answer.sort((a, b) => a - b);
    return answer;
}