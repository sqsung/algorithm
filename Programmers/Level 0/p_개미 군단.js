function solution(hp) {
    let answer = 0;

    while(hp >= 5) {
        hp -= 5;
        answer++;
    }
    
    while(hp >= 3) {
        hp -= 3;
        answer++;
    }
    
    while(hp >= 1) {
        hp -= 1;
        answer++;
    }
    
    return answer;
}