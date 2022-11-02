function solution(array, n) {
    let min = Number.MAX_SAFE_INTEGER;
    let answer = 0 ;
    
    for(let i = 0; i < array.length; i++) {
        if(Math.abs(n - array[i]) < min) {
            min = Math.abs(n - array[i]);
            answer = array[i];
        } else if (Math.abs(n - array[i]) === min) {
            answer < array[i] ? answer = answer : answer = array[i];
        }
    }
    return answer;
}